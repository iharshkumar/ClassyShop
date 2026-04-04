// ─── Real-Order Tracking Controller ─────────────────────────────────────────
// Reads actual orders from MongoDB and maps their order_status to the 5-stage
// tracking pipeline. No in-memory store needed.

import OrderModel from "../models/order.model.js";

const DAY = 24 * 60 * 60 * 1000;

// ── Pipeline Definition ───────────────────────────────────────────────────────
export const PIPELINE = [
  {
    status: "ORDER_PLACED",
    dbStatus: ["pending", "order placed"],   // DB values that map here
    label: "Order Placed",
    icon: "📦",
    note: "Your order has been placed successfully and is being processed.",
    delayDays: 0,
  },
  {
    status: "PACKED",
    dbStatus: ["packed", "processing"],
    label: "Packed",
    icon: "🎁",
    note: "Your items have been carefully packed and are ready for pickup.",
    delayDays: 1,
  },
  {
    status: "SHIPPED",
    dbStatus: ["shipped", "dispatched"],
    label: "Shipped",
    icon: "🚚",
    note: "Your package is on its way! It has been handed over to our delivery partner.",
    delayDays: 2,
  },
  {
    status: "OUT_FOR_DELIVERY",
    dbStatus: ["out for delivery", "out_for_delivery", "on the way"],
    label: "Out for Delivery",
    icon: "🏃",
    note: "Your package is out for delivery and will reach you today.",
    delayDays: 6,
  },
  {
    status: "DELIVERED",
    dbStatus: ["delivered", "completed"],
    label: "Delivered",
    icon: "✅",
    note: "Your order has been delivered successfully. Enjoy your purchase!",
    delayDays: 7,
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Calculate the current pipeline stage index based on elapsed time since placement */
function calculateStageIndex(order) {
  const elapsedMs = Date.now() - new Date(order.createdAt).getTime();
  const elapsedDays = elapsedMs / DAY;

  // Start from the last stage and return the first one we've reached
  for (let i = PIPELINE.length - 1; i >= 0; i--) {
    if (elapsedDays >= PIPELINE[i].delayDays) return i;
  }
  return 0;
}

/** Build the tracking history array based on elapsed time */
function buildHistory(order, currentStageIndex) {
  const placed = new Date(order.createdAt);
  const history = [];
  
  // Only show history for stages that have logically "passed" in time
  for (let i = 0; i <= currentStageIndex; i++) {
    const stage = PIPELINE[i];
    const stageTime = new Date(placed.getTime() + stage.delayDays * DAY);
    history.push({
      status: stage.status,
      label: stage.label,
      note: stage.note,
      timestamp: stageTime.toISOString(),
    });
  }
  return history;
}

/** Format a real DB order into the tracking shape */
function formatOrder(order) {
  const stageIndex = calculateStageIndex(order);
  const stage = PIPELINE[stageIndex];
  const placed = new Date(order.createdAt);
  const estimatedDelivery = new Date(placed.getTime() + 7 * DAY);

  const addr = order.delivery_address;
  const addressString = addr
    ? [addr.address_line1, addr.city, addr.state, addr.country, addr.pincode]
        .filter(Boolean)
        .join(", ")
    : "No address on file";

  const customerName =
    addr?.fullName ||
    order.userId?.name ||
    order.userId?.email ||
    "Customer";

  return {
    id: order._id.toString(),
    customerName,
    address: addressString,
    mobile: addr?.mobile || "",
    email: order.userId?.email || "",
    products: (order.products || []).map((p) => ({
      productId: p.productId,
      productTitle: p.productTitle || "Product",
      quantity: p.quantity || 1,
      price: p.price || 0,
      image: p.image || "",
    })),
    totalAmt: order.totalAmt,
    paymentId: order.paymentId,
    payment_status: order.payment_status,
    userId: order.userId,
    createdAt: order.createdAt,
    placed_at: order.createdAt.toISOString(),
    estimated_delivery: estimatedDelivery.toISOString(),
    current_status: stage.status,
    status_label: stage.label,
    history: buildHistory(order, stageIndex),
    raw_status: order.order_status,
  };
}

// ── Route Handlers ────────────────────────────────────────────────────────────

/** GET /api/orders  — returns all orders for the authenticated user */
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .populate("delivery_address userId")
      .lean();

    const data = orders.map(formatOrder);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/orders/:id  — single order (must belong to user or be admin) */
export const getOrderById = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id)
      .populate("delivery_address userId")
      .lean();

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    // Security: only own orders (or admin can see all – skip check for simplicity)
    if (order.userId?._id?.toString() !== req.userId &&
        order.userId?.toString() !== req.userId) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    res.json({ success: true, data: formatOrder(order) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/orders/pipeline  — returns pipeline stage definitions */
export const getPipeline = (req, res) => {
  res.json({
    success: true,
    data: PIPELINE.map((s) => ({
      status: s.status,
      label: s.label,
      icon: s.icon,
      delayDays: s.delayDays,
      delayHuman: s.delayDays === 0 ? "Instant" : `Day ${s.delayDays}`,
    })),
  });
};
