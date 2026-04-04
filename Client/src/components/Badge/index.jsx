import React from 'react'

const Badge = (props) => {
    const status = props.status?.toUpperCase() || "PENDING";
    const label = props.label || status.replace(/_/g, ' ');
    
    // Mapping for colors
    const colorMap = {
        "ORDER_PLACED": "!bg-blue-100 text-blue-700 !border-blue-200",
        "PACKED": "!bg-purple-100 text-purple-700 !border-purple-200",
        "SHIPPED": "!bg-indigo-100 text-indigo-700 !border-indigo-200",
        "OUT_FOR_DELIVERY": "!bg-orange-100 text-orange-700 !border-orange-200",
        "DELIVERED": "!bg-green-100 text-green-700 !border-green-200",
        "PENDING": "!bg-amber-100 text-amber-700 !border-amber-200",
        "CONFIRM": "!bg-green-100 text-green-700 !border-green-200",
        "CANCELLED": "!bg-red-100 text-red-700 !border-red-200",
    };

    const colorClass = colorMap[status] || "!bg-gray-100 text-gray-700 !border-gray-200";

    return (
        <span className={`inline-block !text-[10px] !font-bold !capitalize !text-center !rounded-full !py-1 !px-3 !border ${colorClass}`}>
            {label}
        </span>
    )
}

export default Badge