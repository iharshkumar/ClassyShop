import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { BiSupport } from "react-icons/bi";
import { LiaGiftSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from 'react-icons/io5';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";






const Footer = () => {
    return (
        <>
            <footer className='translate-y-55 !bg-white !w-full border-1 border-[rgba(0,0,0,0.1)]'>
                <div className='container '>
                    <div className='flex items-center !bg-white !w-[full] justify-center gap-5 translate-y-7 pb-5'>
                        <div className='col flex items-center justify-center flex-col group w-[15%]'>
                            <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:!text-red-500 group-hover:-translate-y-1' />
                            <h3 className='text-[16px] font-[600] mt-3'>
                                Free Shipping
                            </h3>
                            <p className='text-[12px] font-[500] '>For all Orders Over $20</p>
                        </div>

                        <div className='col flex items-center justify-center flex-col group w-[15%]'>
                            <TbTruckReturn className='text-[40px] transition-all duration-300 group-hover:!text-red-500 group-hover:-translate-y-1' />
                            <h3 className='text-[16px] font-[600] mt-3'>
                                30 Days Returns
                            </h3>
                            <p className='text-[12px] font-[500] '>For an Exchange Product</p>
                        </div>
                        <div className='col flex items-center justify-center flex-col group w-[15%]'>
                            <IoWalletOutline className='text-[40px] transition-all duration-300 group-hover:!text-red-500 group-hover:-translate-y-1' />
                            <h3 className='text-[16px] font-[600] mt-3'>
                                Secured Payment
                            </h3>
                            <p className='text-[12px] font-[500] '>Payment Cards Accepted</p>
                        </div>
                        <div className='col flex items-center justify-center flex-col group w-[15%]'>
                            <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:!text-red-500 group-hover:-translate-y-1' />
                            <h3 className='text-[16px] font-[600] mt-3'>
                                Special Gifts
                            </h3>
                            <p className='text-[12px] font-[500] '>Our First Product Order</p>
                        </div>
                        <div className='col flex items-center justify-center flex-col group w-[15%]'>
                            <BiSupport className='text-[40px] transition-all duration-300 group-hover:!text-red-500 group-hover:-translate-y-1' />
                            <h3 className='text-[16px] font-[600] mt-3'>
                                Support 24/7
                            </h3>
                            <p className='text-[12px] font-[500] '>Contact us Anytime</p>
                        </div>



                    </div>
                    <br />

                    <hr />

                    <div className='footer flex items-center translate-y-11 '>
                        <div className='part1 w-[25%] border-r border-[rgba(0,0,0,0.3)]'>
                            <h2 className='text-[18px] font-[600]'>
                                Contact us
                            </h2>
                            <p className='text-[13px] font-[400]'>
                                ClassShop - Mega Super Store
                                Mandya,Karnataka
                                India
                            </p>
                            <Link className='link text-[13px]' to="mailto:someone@example.com">harsh@company.com</Link>
                            <span className='text-[22px] font-[600] block w-full mt-3 !text-red-500'>
                                (+91) 8292035874
                            </span>


                            <div className='flex items-center gap-2'>
                                <IoChatboxOutline className='text-[40px] !text-red-500' />
                                <span className='text-[16px] font-[600]'>
                                    Online Chat<br />
                                    Get Expert Help
                                </span>
                            </div>
                        </div>


                        <div className='part2 w-[40%] flex '>
                            <div className="part2_col1 w-[50%] translate-x-10">
                                <h2 className='text-[18px] font-[600]'>
                                    Products
                                </h2>

                                <ul className='list'>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Prices Drop</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>New Products</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Best Deals</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Contact us</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Sitemap</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Stores</Link></li>

                                </ul>
                            </div>

                            <div className="part2_col2 w-[50%] translate-x-10">
                                <h2 className='text-[18px] font-[600]'>
                                    Our Company
                                </h2>

                                <ul className='list'>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Delivery</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Legal Notice</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Terms & Conditions</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>About Us</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Secure Payment</Link></li>
                                    <li className='list-none text[14px] w-full'><Link to="/" className='link'>Login</Link></li>

                                </ul>
                            </div>

                        </div>

                        <div className='part2 w-[35%] flex flex-col translate-x-11 translate-y-2'>
                            <h2 className='text-[18px] font-[600]'>
                                Subscribe To Newsletter
                            </h2>
                            <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>

                            <form className='mt-5'>
                                <input type="text" className='w-full h-[45px] border outline-none pl-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]'
                                    placeholder='Your Email Address' />
                                <Button className='btn-org'>Subscribe</Button>
                                <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy policy" />

                            </form>


                        </div>

                    </div>

                </div>
            </footer>


            <div className='bottomStrip border-t border-[rgba(0,0,0,0.1)] bg-white translate-y-65' >
                <div className=' container flex items-center justify-center'>
                    <ul className='flex items-center gap-2 -translate-x-100'>
                        <li className='list-none'><Link to="/" target="_blank" className='!w-[35px] !h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                        flex items-center justify-center group hover:bg-red-500 transition-all'>
                            <CiFacebook className='text-[20px] group-hover:text-white' />
                        </Link>

                        </li>

                        <li className='list-none'><Link to="/" target="_blank" className='!w-[35px] !h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                        flex items-center justify-center group hover:bg-red-500 transition-all'>
                            <RiTwitterXLine className='text-[20px] group-hover:text-white' />
                        </Link>

                        </li>

                        <li className='list-none'><Link to="/" target="_blank" className='!w-[35px] !h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                        flex items-center justify-center group hover:bg-red-500 transition-all'>
                            <CiYoutube className='text-[20px] group-hover:text-white' />
                        </Link>

                        </li>

                        <li className='list-none'><Link to="/" target="_blank" className='!w-[35px] !h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                        flex items-center justify-center group hover:bg-red-500 transition-all'>
                            <FaPinterest className='text-[20px] group-hover:text-white' />
                        </Link>

                        </li>

                        <li className='list-none'><Link to="/" target="_blank" className='!w-[35px] !h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                        flex items-center justify-center group hover:bg-red-500 transition-all'>
                            <FaInstagram className='text-[20px] group-hover:text-white' />
                        </Link>

                        </li>
                    </ul>

                    <p className='text-[13px] text-center mb-0'>
                        © 2025 - Ecommerce Template
                    </p>
                    <div className='flex items-center translate-x-100'>
                        <img src="/card1.png" alt='image' />
                        <img src="/card2.png" alt='image' />
                        <img src="/card3.png" alt='image' />
                        <img src="/card4.png" alt='image' />
                        <img src="/card5.png" alt='image' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer;