import React from 'react';
import { IoMdTime } from "react-icons/io"
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const BlogItem = () => {
    return (
        <div className='blogItem group'>
            <div className='imgWrapper w-full overflow-hidden rounded-md cusor-pointer relative'>
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png"
                    className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt='blog image' />
                <span className='flex items-center justify-center text-white absolute bottom-[15px] 
                right-[15px] z-50 bg-red-500 rounded-md text-[12px] font-[500] gap-1'>
                    <IoMdTime className='text-[16px] ' /> 5 April,2025
                </span>
            </div>
            <div className='info py-4'>
                <h2 className='text-[15px] font-[600] text-black'>
                    <Link to="/" className='link'>Nullam ullamcorper onware
                    </Link>
                </h2>
                <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.....
                </p>
                <Link className='link font-[500] text-[14px] flex items-center gap-1'>
                Read more
                <IoIosArrowForward/>
                </Link>

            </div>

        </div>
    )
}

export default BlogItem;