# CartLoop - Premium MERN E-Commerce Platform

CartLoop is a sophisticated, full-stack e-commerce solution built with the MERN stack (MongoDB, Express, React, Node.js). It offers a seamless shopping experience for customers and a powerful management suite for administrators, featuring integrated blogging, advanced search, and secure multi-gateway payments.

## 🚀 Key Functionalities

### 🔐 Authentication & Security
- **Secure Password Hashing**: Implements client-side **SHA-256 hashing** to ensure passwords are encrypted before even leaving the browser, coupled with server-side **Bcrypt** for secondary hashing.
- **Session Management**: Dual-token system using **JWT (Access & Refresh Tokens)** for persistent and secure user sessions.
- **Social Login**: Google OAuth integration via **Firebase** for frictionless user onboarding.
- **Verification Flow**: Automated email verification and password recovery powered by **Nodemailer**.

### 🛍️ Shopping Experience
- **Advanced Product Engine**: Dynamic product listing with multi-level categorization (Category > Sub-category), detailed specifications, and ratings.
- **Smart Search & Filtering**: Real-time search functionality with advanced filtering options (price range, categories, inventory status) and paginated results.
- **Persistent Cart & Wishlist**: Real-time synchronization of the shopping cart and wishlist across sessions, stored in MongoDB for consistent cross-device access.
- **Interactive UI**: High-performance interface featuring **Skeleton Loaders** to eliminate layout shifts and **Lazy Loading** for optimized media delivery.

### 💳 Checkout & Order Management
- **Multi-Gateway Payments**:
  - **Razorpay**: Integrated for seamless domestic payments.
  - **PayPal**: SDK-level integration for international transactions.
  - **COD**: Cash on Delivery option with standard order validation.
- **Real-Time Order Tracking**: A dynamic tracking system that provides live updates on order status (Pending, Shipped, Delivered) with a visual progress indicator.
- **Address Management**: Users can save and manage multiple shipping addresses for a faster checkout process.

### 📊 Admin Control Plane
- **Management Dashboard**: A dedicated portal providing metrics on sales, user growth, and inventory levels.
- **Entity CRUD Operations**: Complete control over Products, Categories, Sub-categories, and Users.
- **Banner & Ads System**: Manage home screen sliders, brand banners (V1/V2), and promotional ads directly from the dashboard.
- **Media Hosting**: Integrated with **Cloudinary** for high-performance image storage and management.

### ✍️ Content Management (Blogs)
- Full-featured **Blogging Engine** allowing the creation of editorial-style articles.
- Categorized blog posts with featured highlight sections and interactive reading experiences.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS 4, Material UI (MUI), Swiper JS (Sliders), Styled Components.
- **Backend**: Node.js, Express.js (v5.2), Helmet (Security Middleware), Morgan (Logging).
- **Database**: MongoDB with Mongoose ODM (v9.1).
- **Storage**: Cloudinary (Images), Firebase (Auth).
- **Payment**: PayPal Checkout SDK, Razorpay.

---

## 📞 Contact

For any inquiries, feedback, or developer contact, please reach out via:

- **Email**: [srivastavaharsh1108@gmail.com](mailto:srivastavaharsh1108@gmail.com)
- **Developer**: Harsh Kumar
