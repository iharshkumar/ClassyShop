import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDelete } from "react-icons/md";
import Button from '@mui/material/Button';

const CartPanel = () => {
    return (
        <>
            <div className="scroll w-full !max-h-[300px] overflow-y-scroll overflow-x-hidden !py-3 !px-4">
                <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !mb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] !rounded-lg">
                        <Link to="/product/84758" className='block group'> <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill" className="w-full group-hover:scale-105" /></Link>
                    </div>

                    <div className="info w-[75%] !pr-4 relative">
                        <h4 className="text-[16px] font-[500px]">
                            <Link to="/product/84758" className='link transition-all'>  Cotton Set-Tie & Dye Tracksuit </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price: $35</span>
                        </p>

                        <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>

                <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !mb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] !rounded-lg">
                        <Link to="/product/84758" className='block group'> <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill" className="w-full group-hover:scale-105" /></Link>
                    </div>

                    <div className="info w-[75%] !pr-4 relative">
                        <h4 className="text-[16px] font-[500px]">
                            <Link to="/product/84758" className='link transition-all'>  Cotton Set-Tie & Dye Tracksuit </Link>

                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price: $35</span>
                        </p>

                        <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>

                <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !mb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] !rounded-lg">
                        <Link to="/product/84758" className='block group'> <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill" className="w-full group-hover:scale-105" /></Link>
                    </div>

                    <div className="info w-[75%] !pr-4 relative">
                        <h4 className="text-[16px] font-[500px]">
                            <Link to="/product/84758" className='link transition-all'>  Cotton Set-Tie & Dye Tracksuit </Link>

                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price: $35</span>
                        </p>

                        <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>

                <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !mb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] !rounded-lg">
                        <Link to="/product/84758" className='block group'> <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill" className="w-full group-hover:scale-105" /></Link>
                    </div>

                    <div className="info w-[75%] !pr-4 relative">
                        <h4 className="text-[16px] font-[500px]">
                            <Link to="/product/84758" className='link transition-all'>  Cotton Set-Tie & Dye Tracksuit </Link>

                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price: $35</span>
                        </p>

                        <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>

                <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !mb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] !rounded-lg">
                        <Link to="/product/84758" className='block group'> <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill" className="w-full group-hover:scale-105" /></Link>
                    </div>

                    <div className="info w-[75%] !pr-4 relative">
                        <h4 className="text-[16px] font-[500px]">
                            <Link to="/product/84758" className='link transition-all'>  Cotton Set-Tie & Dye Tracksuit </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price: $35</span>
                        </p>

                        <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>
            </div>

            <br />

            <div className='bottomSec bottom-[10px] left-[10px]'>
                <div className='bottomInfo !pt-35 !px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <span>1 item </span>
                        <span className='text-[#ff5252] !font-bold'> $56.00</span>
                    </div>

                    <div className='flex items-center justify-between w-full border-b border-[rgba(0,0,0,0.1)] !pb-4 !mb-4'>
                        <span>Shipping</span>
                        <span className='text-[#ff5252] !font-bold'> $5.00</span>
                    </div>
                </div>
                <div className='bottomInfo !px-4 w-full flex items-center justify-between flex-col'>

                    <div className='flex items-center justify-between w-full'>
                        <span>Total(tax excl.) </span>
                        <span className='text-[#ff5252] !font-bold'> $93.00</span>
                    </div>

                    <div className='flex items-center justify-between w-full'>
                        <span>Total(tax incl.)</span>
                        <span className='text-[#ff5252] !font-bold'> $93.00</span>
                    </div>

                    <div className='flex items-center justify-between w-full'>
                        <span>Taxes:</span>
                        <span className='text-[#ff5252] !font-bold'> $0.00</span>
                    </div>


                    <div className='flex items-center justify-between w-full gap-1 !pt-5'>
                        <Link to="/cart" className='w-[50%] d-block'><Button className='btn-org btn-lg w-full'>View Cart</Button></Link>
                        <Link to="/checkout" className='w-[50%] d-block'><Button className='btn-org btn-lg w-full'>Checkout</Button></Link>
                    </div>



                </div>
            </div>
        </>
    )
}

export default CartPanel