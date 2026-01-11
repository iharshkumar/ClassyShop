import React from 'react'

const Badge = (props) => {
    return (
        <span className={`inline-block !text-[11px] !capitalize !rounded-full !py-1 !px-3 
        ${props.status === "pending" && '!bg-red-500 text-white'} 
        ${props.status === "confirm" && '!bg-green-500 text-white'}
        ${props.status === "delivered" && '!bg-green-700 text-white'}
        `}>
            {props.status}
        </span>
    )
}

export default Badge