import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoGitCompareOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa';

export const ProductDetails = () => {

    const [productActionIndex, setProductActionIndex] = useState(null)
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className='!py-4 !pb-0'>
                <div className='container !p-2 !pb-5'>
                    <Breadcrumbs aria-label="breadcrumb" >
                        <Link underline="hover" color="inherit" href="/" className='link transition text-[14px]'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition !text-[14px]'
                        >
                            Fashion
                        </Link>
                        <Link
                            underline="hover"
                            className='link transition text-[14px]'
                        >
                            Cotton Dye Tracksuit
                        </Link>
                    </Breadcrumbs>
                </div>


            </div>



            <section className='!bg-white !py-5' >
                <div className='container flex gap-8 items-center'>
                    <div className='productZoomContainer w-[30%] '>
                        <ProductZoom />
                    </div>

                    <div className='productContent w-[60%]'>
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
                        <div className='flex items-center  gap-5'>
                            <div className='qtyBoxWrapper w-[70px]'>
                                <QtyBox />
                            </div>

                            <Button className='btn-org gap-2'><MdOutlineShoppingCart className='text-[22px] ' />
                                Add To Cart
                            </Button>

                        </div>

                        <div className='flex items-center gap-7 !mt-6'>
                            <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                                < FaRegHeart className='text-[18px]' />
                                Add to Wishlist
                            </span>

                            <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                                < IoGitCompareOutline className='text-[18px]' />
                                Add to Compare
                            </span>
                        </div>
                    </div>
                </div>


                <div className='container w-full !mt-8'>
                    <div className='flex items-center gap-7 !mb-5'>
                        <span className={`link text-[16px] cursor-pointer font-[500] ${activeTab === 0 && 'text-red-500'}`}
                            onClick={() => setActiveTab(0)}>
                            Description
                        </span>
                        <span className={`link text-[16px] cursor-pointer font-[500] ${activeTab === 1 && 'text-red-500'}`}
                            onClick={() => setActiveTab(1)}>
                            Product Details
                        </span>
                        <span className={`link text-[16px] cursor-pointer font-[500] ${activeTab === 2 && 'text-red-500'}`}
                            onClick={() => setActiveTab(2)}>
                            Reviews(5)
                        </span>
                    </div>

                    {
                        activeTab === 0 &&
                        <div className='shadow-md w-full !py-5 !p-8 rounded-md'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>


                            <h4>Lightweight Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>

                            <h4>Free Shipping & Return</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>

                            <h4>Money Back Gurantee</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>

                            <h4>Online Support</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>



                        </div>
                    }


                </div>

            </section>
        </>
    )
}

export default ProductDetails;