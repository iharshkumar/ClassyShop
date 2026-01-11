import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
    return (
        <div className="searchBox w-full h-12 bg-[#e5e5e5] rounded-full relative">
            <input
                type="text"
                placeholder="Search for products.."
                className="w-full h-full focus:outline-none bg-transparent pl-20 pr-0 translate-x-5 text-[14px] rounded-full"
            />
            <Button className="!absolute top-[5px] right-[5px] z-50 
            !w-[37px] !min-[37px] h-[37px] !rounded-full !text-black">
                <IoSearch className='text-[#2a2a2a] text-[20px]'/></Button>


        </div>
    )
}

export default Search;
