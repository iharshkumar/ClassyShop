import { Button, Rating } from '@mui/material';
import React, { useState } from 'react'
import QtyBox from '../QtyBox';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoGitCompareOutline } from 'react-icons/io5';

const ProductDetailsComponents = (props) => {

    const [productActionIndex, setProductActionIndex] = useState(null)


    return (

        <>
            <h1 className='text-[25px] font-[600] !mb-2'>
                {props?.item?.name}
            </h1>
            <div className='flex items-center gap-3'>
                <span className='text-gray-400 text-[13px] opacity-75'>Brands : <span className='font-[500] !text-black'>
                    {props?.item?.brand}
                </span>
                </span>


                <Rating name="size-small" defaultValue={props?.item?.rating} precision={0.5} size="small" readOnly />
                <span className='text-[13px] cursor-poointer'>Review (5)</span>

            </div>
            <div className='productItem__priceWrapper !mt-4'>
                <span className='productItem__oldPrice'>
                    &#8377; {props?.item?.oldPrice}
                </span>
                <span className='productItem__price'>
                    &#8377; {props?.item?.price}
                </span>
                <span className='text-[14px]'>Available In Stock: <span className='!text-green-500 text-[14px] font-[500]'>{props?.item?.countInStock} items</span></span>
            </div>


            <p className='!mt-3 !mb-5'>
                {props?.item?.description}
            </p>

            {
                props?.item?.productRam?.length !== 0 &&
                <div className='flex items-center gap-3'>
                    <span className='text-[16px]'>RAM</span>

                    <div className='flex items-center gap-1 actions'>
                        {
                            props?.item?.productRam?.map((item, index) => {
                                return (
                                    <Button className={`${productActionIndex === index ? '!bg-[#ff5252] !text-white-[300]' : ''}`} onClick={() => setProductActionIndex(index)}>{item}</Button>
                                )
                            })
                        }
                    </div>
                </div>
            }

            {
                props?.item?.size?.length !== 0 &&
                <div className='flex items-center gap-3'>
                    <span className='text-[16px]'>SIZE</span>

                    <div className='flex items-center gap-1 actions'>
                        {
                            props?.item?.size?.map((item, index) => {
                                return (
                                    <Button className={`${productActionIndex === index ? '!bg-[#ff5252] !text-white-[300]' : ''}`} onClick={() => setProductActionIndex(index)}>{item}</Button>
                                )
                            })
                        }
                    </div>
                </div>
            }
            {
                props?.item?.productWeight?.length !== 0 &&
                <div className='flex items-center gap-3'>
                    <span className='text-[16px]'>Weight</span>

                    <div className='flex items-center gap-1 actions'>
                        {
                            props?.item?.productWeight?.map((item, index) => {
                                return (
                                    <Button className={`${productActionIndex === index ? '!bg-[#ff5252] !text-white-[300]' : ''}`} onClick={() => setProductActionIndex(index)}>{item}</Button>
                                )
                            })
                        }
                    </div>
                </div>
            }

            


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