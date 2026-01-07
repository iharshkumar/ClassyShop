import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Button from '@mui/material/Button';
import { BsFillBagFill } from "react-icons/bs";
import CartItems from './cartItems';



const CartPage = () => {



    return (
        <section className='section !py-10 !pb-10'>
            <div className='container !w-[90%] !max-w-[90%] flex gap-5'>
                <div className='leftPart w-[70%]'>

                    <div className='shadow-md rounded-md  bg-white'>
                        <div className='!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2>Your Cart</h2>
                            <p className='!mt-0'>There are <span className='font-bold text-[#ff5252]'>2</span> products in your cart</p>

                        </div>

                        <CartItems size="S" qty={1} />
                        <CartItems size="S" qty={1} />
                        <CartItems size="S" qty={1} />
                        <CartItems size="S" qty={1} />
                    </div>
                </div>


                <div className='rightPart w-[25%]'>
                    <div className='!shadow-md !rounded-md !bg-white !p-5'>
                        <h3 className='!pb-3'>Cart Details</h3>
                        <hr />
                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Subtotal</span>
                            <span className='text-red-500 font-bold'>$1300.00</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Shipping</span>
                            <span className=' font-bold'>Free</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Estimate for</span>
                            <span className=' font-bold'>United Kingdom</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Total</span>
                            <span className='text-red-500 font-bold'>$1300.00</span>
                        </p>
                        <br />
                        <Button className='btn-org btn-lg w-full flex gap-2'><BsFillBagFill className='text-[14px]' />
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage