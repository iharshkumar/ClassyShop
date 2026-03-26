import React from 'react'

const Badge = (props) => {
    const status = props.status?.toLowerCase() || "pending";
    return (
        <span className={`inline-block !text-[11px] !capitalize !rounded-full !py-1 !px-3 
        ${status === "pending" && '!bg-red-500 text-white'} 
        ${status === "confirm" && '!bg-green-500 text-white'}
        ${status === "deliver" && '!bg-green-700 text-white'}
        `}>
            {status}
        </span>
    )
}

export default Badge