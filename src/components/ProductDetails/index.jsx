import { Button, Rating } from '@mui/material';
import React, { useState } from 'react'
import QtyBox from '../QtyBox';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoGitCompareOutline } from 'react-icons/io5';

const ProductDetailsComponents = () => {

    const [productActionIndex, setProductActionIndex] = useState(null)


    return (

        <>
            <h1 className='text-[25px] font-[600] !mb-2'>Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord
                Set-1PAIR (Size-XL)</h1>
            <div className='flex items-center gap-3'>
                <span className='text-gray-400 text-[13px] opacity-75'>Brands : <span className='font-[500] !text-black'>
                    Altecia
                </span>
                </span>


                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <span className='text-[13px] cursor-poointer'>Review (5)</span>

            </div>
            <div className='productItem__priceWrapper !mt-4'>
                <span className='productItem__oldPrice'>
                    $45.00
                </span>
                <span className='productItem__price'>
                    $34.00
                </span>
                <span className='text-[14px]'>Available In Stock: <span className='!text-green-500 text-[14px] font-[500]'>147 items</span></span>
            </div>


            <p className='!mt-3 !mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='flex items-center gap-3'>
                <span className='text-[16px]'>Size</span>
                <div className='flex items-center gap-1 actions'>
                    <Button className={`${productActionIndex === 0 ? '!bg-[#ff5252] !text-white-[300]' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                    <Button className={`${productActionIndex === 1 ? '!bg-[#ff5252] !text-white-[300]' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                    <Button className={`${productActionIndex === 2 ? '!bg-[#ff5252] !text-white-[300]' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                    <Button className={`${productActionIndex === 3 ? '!bg-[#ff5252] !text-white-[300]' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                </div>
            </div>

            <p className='text-[14px] !mt-3 !mb-3'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
            <div className='flex items-center  gap-5 !  py-3'>
                <div className='qtyBoxWrapper w-[70px]'>
                    <QtyBox />
                </div>

                <Button className='btn-org gap-2'><MdOutlineShoppingCart className='text-[22px] ' />
                    Add To Cart
                </Button>

            </div>

            <div className='flex items-center gap-7 !mt-4'>
                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                    < FaRegHeart className='text-[18px]' />
                    Add to Wishlist
                </span>

                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                    < IoGitCompareOutline className='text-[18px]' />
                    Add to Compare
                </span>
            </div>
        </>
    )
}

export default ProductDetailsComponents;