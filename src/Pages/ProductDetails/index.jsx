import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';

export const ProductDetails = () => {
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



            <section className='!bg-white !py-5'>
                <div className='container flex gap-8'>
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
                        </div>



<br/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;