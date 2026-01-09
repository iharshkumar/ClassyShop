import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';


const MyListItems = (props) => {

    return (
        <div className='cartItem w-full !p-3 flex items-center gap-4 !pb-5 !border-b !border-[rgba(0,0,0.1)]'>
            <div className='img w-[15%] !rounded-md !overflow-hidden'>
                <Link to="/product/84758" className="group">
                    <img src="https://serviceapi.spicezgold.com/download/1742447169245_blubags-40l-men-backpack-school-bag-college-bag-office-bag-laptop-bag-grey-product-images-rvamcbxklo-0-202303100916.webp"
                        className='w-full group-hover:scale-105 transition-all' />
                </Link>
            </div>


            <div className='info w-[85%] relative '>
                <IoCloseSharp className='cursor-pointer absolute  top-[0px] right-[0px] text-[22px] link transition-all' />
                <span className='text-[14px]'>Altecia</span>
                <h3 className='text-[15px]'><Link className='link'>Cotton Set-Tie & Dye Tracksuit</Link></h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />



                <div className='flex items-center gap-4 !mt-5 !mb-5'>
                    <span className='price text-[15px] font-[600]'>
                        $58.00
                    </span>

                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>
                        $58.00
                    </span>

                    <span className='price text-[#f15252] text-[15px] font-[600]'>
                        55% OFF
                    </span>
                </div>
                <Button className='btn-org btn-sm'>Add to Cart</Button>
            </div>
        </div>
    )
}

export default MyListItems;