import React from 'react'
import { Link } from 'react-router-dom'

const CartPage = () => {
    return (
        <section className='section !py-5'>
            <div className='container !w-[90%] !max-w-[90%] flex '>
                <div className='leftPart w-[75%]'>
                    <h2>Your Cart</h2>
                    <p className='!mt-0'>There are <span className='font-bold text-[#ff5252]'>2</span> products in your cart</p>

                    <div className='shadow-md rounded-md  bg-white'>
                        <div className='cartItem w-full !p-3 flex items-center gap-4'>
                            <div className='img w-[10%] !rounded-md overflow-hidden'>
                                <Link to="/product/84758" className="group">
                                    <img src="https://serviceapi.spicezgold.com/download/1742447169245_blubags-40l-men-backpack-school-bag-college-bag-office-bag-laptop-bag-grey-product-images-rvamcbxklo-0-202303100916.webp"
                                        className='w-full group-hover:scale-105 transition-all' />
                                </Link>
                            </div>


                            <div className='info w-[90%]'>
                                <span className='text-[14px]'>Altecia</span>
                                <h3 className='text-[15px]'><Link className='link'>Cotton Set-Tie & Dye Tracksuit</Link></h3>

                                <div className='flex items-center gap-4 !mt-3'>
                                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>
                                        $58.00
                                    </span>
                                    <span className='price text-[#f15252] text-[15px] font-[600]'>
                                        $58.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage