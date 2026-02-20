import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BsFillBagFill } from 'react-icons/bs';

const Checkout = () => {
    return (
        <section className='!py-10'>
            <div className='container flex  gap-5'>
                <div className='leftCol w-[70%]'>
                    <div className='card w-full rounded-md bg-white shadow-md !p-5'>
                        <h1>Billing Details</h1>

                        <form className='w-full !mt-3'>
                            <div className='flex items-center gap-5 !pb-5'>
                                <div className='col w-[50%]'>
                                    <TextField
                                        className='w-full !mt-3'
                                        label="Full Name"
                                        variant="outlined"
                                        size='small'
                                    />
                                </div>

                                <div className='col w-[50%]'>
                                    <TextField
                                        type='email'
                                        className='w-full !mt-3'
                                        label="Email"
                                        variant="outlined"
                                        size='small'
                                    />
                                </div>
                            </div>

                            <h6 className='text-[14px] font-[500] '>Street Address *</h6>
                            <div className='col w-[100%]'>
                                <TextField
                                    className='w-full !mt-2'
                                    label="House Number and Street Name "
                                    variant="outlined"
                                    size='small'
                                />
                            </div>
                            <div className='col w-[100%]'>
                                <TextField
                                    className='w-full !mt-3'
                                    label="Apartment,suite,unit,etc. (optional)"
                                    variant="outlined"
                                    size='small'
                                />
                            </div>

                            <h6 className='text-[14px] font-[500] !mt-3'>Town/City *</h6>
                            <div className='col w-[100%]'>
                                <TextField
                                    className='w-full !mt-2'
                                    label="City"
                                    variant="outlined"
                                    size='small'
                                />
                            </div>

                            <h6 className='text-[14px] font-[500] !mt-3'>State/Country *</h6>
                            <div className='col w-[100%]'>
                                <TextField
                                    className='w-full !mt-2'
                                    label="State"
                                    variant="outlined"
                                    size='small'
                                />
                            </div>

                            <h6 className='text-[14px] font-[500]  !mt-3'>Postcode/ZIP *</h6>
                            <div className='col w-[100%]'>
                                <TextField
                                    className='w-full !mt-2'
                                    label="ZIP Code"
                                    variant="outlined"
                                    size='small'
                                />
                            </div>
                            <div className='flex items-center gap-5 !mt-2'>
                                <div className='col w-[50%]'>
                                    <TextField
                                        className='w-full !mt-2'
                                        label="Phone Number"
                                        variant="outlined"
                                        size='small'
                                    />
                                </div>
                                <div className='col w-[50%]'>
                                    <TextField
                                        className='w-full !mt-2'
                                        label="Email Address"
                                        variant="outlined"
                                        size='small'
                                    />
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
                <div className='rightCol w-[30%]'>
                    <div className='card !shadow-md !rounded-md !bg-white !p-5'>
                        <h3 className='!mb-4'>Your Order</h3>
                        <div className='flex items-center justify-between !py-3 !px-2
                        border-t border-b border-[rgba(0,0,0,0.1)]'>
                            <span className='text-[14px] font-[600]'>Product</span>
                            <span className='text-[14px] font-[600]'>Subtotal</span>
                        </div>

                        <div className='!mt-3 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2'>

                            <div className='flex items-center justify-between !py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[30%] h-[60%] object-cover !overflow-hidden !rounded-md group cursor-pointer'>
                                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                            className='w-full transition-all group-hover:scale-105' />
                                    </div>

                                    <div className='info '>
                                        <h4 className='text-[14px]'>Cotton Set-Tie.... </h4>
                                        <span className='text-[14px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>$1,300.00</span>
                            </div>

                            <div className='flex items-center justify-between !py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[30%] h-[60%] object-cover !overflow-hidden !rounded-md group cursor-pointer'>
                                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                            className='w-full transition-all group-hover:scale-105' />
                                    </div>

                                    <div className='info '>
                                        <h4 className='text-[14px]'>Cotton Set-Tie.... </h4>
                                        <span className='text-[14px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>$1,300.00</span>
                            </div>

                            <div className='flex items-center justify-between !py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[30%] h-[60%] object-cover !overflow-hidden !rounded-md group cursor-pointer'>
                                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                            className='w-full transition-all group-hover:scale-105' />
                                    </div>

                                    <div className='info '>
                                        <h4 className='text-[14px]'>Cotton Set-Tie.... </h4>
                                        <span className='text-[14px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>$1,300.00</span>
                            </div>

                            <div className='flex items-center justify-between !py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[30%] h-[60%] object-cover !overflow-hidden !rounded-md group cursor-pointer'>
                                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                            className='w-full transition-all group-hover:scale-105' />
                                    </div>

                                    <div className='info '>
                                        <h4 className='text-[14px]'>Cotton Set-Tie.... </h4>
                                        <span className='text-[14px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>$1,300.00</span>
                            </div>

                            <div className='flex items-center justify-between !py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[30%] h-[60%] object-cover !overflow-hidden !rounded-md group cursor-pointer'>
                                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                            className='w-full transition-all group-hover:scale-105' />
                                    </div>

                                    <div className='info '>
                                        <h4 className='text-[14px]'>Cotton Set-Tie.... </h4>
                                        <span className='text-[14px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>$1,300.00</span>
                            </div>

                        </div>

                        <Button className='!mt-4 btn-org btn-lg w-full flex gap-2'><BsFillBagFill className='text-[14px]' />
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout