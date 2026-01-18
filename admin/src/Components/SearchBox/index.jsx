import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
    return (
        <div className='w-full !h-auto !bg-[#f1f1f1] relative'>
            <CiSearch className='absolute top-[13px] left-[10px] !z-50 pointer-events-none !opacity-80'/>
            <input type="text" className='w-full h-[40px] !bg-[#f1f1f1] !p-2 !pl-8
        !focus:outline-none !focus:border-[rgba(0,0,0,0.5)] !rounded-md !text-[14px]' placeholder='Search here...'/>

        </div>
    )
}

export default SearchBox