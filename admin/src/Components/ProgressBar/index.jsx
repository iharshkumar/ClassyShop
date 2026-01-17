import React from 'react'

const Progress = (props) => {
    return (
        <div className='w-[100px] h-auto overflow-hidden !rounded-md bg-[#f1f1f1]'>
            <span 
                className={`flex items-center h-[8px] 
                    ${props.type === "success" && 'bg-green-600'}
                    ${props.type === "error" && 'bg-pink-600'}
                    ${props.type === "warning" && 'bg-orange-400'}
                `}
                style={{ width: `${props.value}%` }}
            ></span>
        </div>
    )
}

export default Progress