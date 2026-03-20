import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BsFillBagFill } from 'react-icons/bs';
import { MyContext } from '../../App';
import { FaPlus } from 'react-icons/fa6';
import Radio from '@mui/material/Radio';

const Checkout = () => {
    const context = useContext(MyContext);
    const [isChecked, setIsChecked] = useState(0);
    const editAddress = (id) => {
        context?.setEditId(id)
        context?.toggleAddressPanel(true)
    }

    const handleChange = (e, index) => {
        if (e.target.checked) {
            setIsChecked(index)
        }
    }

    return (
        <section className='!py-10'>
            <div className='w-[80%] !mx-auto flex  gap-5'>
                <div className='leftCol w-[70%]'>
                    <div className='card w-full rounded-md bg-white shadow-md !p-5'>
                        <div className='flex items-center justify-between !mb-3'>
                            <h2>Select Delivery Address</h2>
                            <Button variant="outlined"
                                className='!gap-2'
                                onClick={() => { context?.setEditId(null); context?.toggleAddressPanel(true); }}
                            >
                                <FaPlus />
                                Add New Address
                            </Button>
                        </div>

                        <div className='flex gap-4 flex-col'>
                            {
                                context?.address?.length !== 0 ? context?.address?.map((address, index) => {
                                    return (
                                        <label key={index} className={`flex gap-3 !p-4 !border !border-[rgba(0,0,0,0.1)] !rounded-md relative ${isChecked === index && '!bg-[#f1faff]'}`}>
                                            <div>
                                                <Radio size='small'
                                                    onChange={(e) => handleChange(e, index)}
                                                    checked={isChecked === index}
                                                />
                                            </div>
                                            <div className='info'>
                                                <span className='inline-block !px-3 !py-1 !text-[11px] !font-bold !bg-[#f1faff] !mb-2 !text-[#2bbef9] !rounded-md uppercase tracking-wide border border-[#2bbef9]'>{address?.addressType}</span>
                                                <h3 className='!mt-0 !mb-0'>{address?.fullName}</h3>
                                                <p className='!mt-0 !mb-0'>Mobile : +{address?.mobile}</p>
                                                <p className='!mt-0 !mb-0'>{address?.address_line1} </p>
                                                <p className='!mt-0 !mb-0'>{address?.city}, {address?.state}, {address?.pincode}</p>
                                            </div>

                                            <Button variant='text'
                                                className='!absolute !top-[15px] !right-[15px] !btn-sm font-bold'
                                                onClick={() => editAddress(address?._id)}
                                            >Edit</Button>
                                        </label>
                                    )
                                })
                                    :

                                    <>
                                        <div className='flex flex-col !mt-5 items-center justify-center !p-5'>
                                            <img src="/relocation.png" className='w-[100px] h-[100px]' />
                                            <h2 className='text-center !mb-0 !mt-0'>No Address Found in your account</h2>
                                            <p className='text-center !mt-0 !mb-0'>Add an address to continue</p>
                                            <Button variant="outlined"
                                                className='!gap-2 !mt-2 btn-org '
                                                onClick={() => { context?.setEditId(null); context?.toggleAddressPanel(true); }}
                                            >
                                                <FaPlus />
                                                Add Address
                                            </Button>
                                        </div>
                                    </>
                            }
                        </div>

                    </div>
                </div>


                <div className='rightCol w-[30%]'>
                    <div className='card !shadow-md !rounded-md !bg-white !p-5'>
                        <h3 className='!mb-4'>Your Order</h3>
                        <div className='flex items-center justify-between !py-3 !px-2 border-t border-b border-[rgba(0,0,0,0.1)]'>
                            <span className='text-[14px] font-[600]'>Product</span>
                            <span className='text-[14px] font-[600]'>Subtotal</span>
                        </div>

                        <div className='!mt-3 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2'>
                            {
                                context?.cartData?.length !== 0 && context?.cartData?.map((item, index) => {
                                    return (
                                        <div className='flex items-center justify-between !py-2'>
                                            <div className='part1 flex items-center gap-3'>
                                                <div className='img w-[30%] !h-[70px] object-cover !overflow-hidden !rounded-md group cursor-pointer'>
                                                    <img src={item?.image}
                                                        className='w-full transition-all group-hover:scale-105' />
                                                </div>

                                                <div className='info '>
                                                    <h4 className='text-[14px]'>{item?.productTitle?.substr(0, 20) + "..."} </h4>
                                                    <span className='text-[14px]'>Qty : {item?.quantity}</span>
                                                </div>
                                            </div>

                                            <span className='text-[14px] font-[500]'>&#x20b9;{item?.price * item?.quantity}</span>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <Button className='!mt-4 btn-org btn-lg w-full flex gap-2'><BsFillBagFill className='text-[14px]' />
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Checkout