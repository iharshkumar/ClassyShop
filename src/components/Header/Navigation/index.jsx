import Button from '@mui/material/Button';
import React from 'react'
import { RiMenu2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css";


const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = React.useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }

    return (
        <>
            <nav>
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[25%] justify-start">
                        <Button className='!text-black gap-2 w-full ' onClick={openCategoryPanel} >
                            <RiMenu2Fill className='text-[18px]' />Shop by Categories
                            <LiaAngleDownSolid className='text-[13px] ml-auto font-bold ' />
                        </Button>
                    </div>

                    <div className="col_2 w-[60%]">
                        <ul className="flex items-center gap-3 justify-center nav">
                            <li className="list-none">
                                <Link to="/" className="link transition !font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                                        Home</Button>
                                </Link>
                            </li>

                            <li className="list-none relative group">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Fashion
                                    </Button>
                                </Link>



                                <div className='submenu absolute top-full left-0 min-w-[150px] bg-white shadow-md 
                                                opacity-0 invisible translate-y-2
                                                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                                transition-all duration-300 z-50'>
                                    <ul>
                                        <li className="list-none w-full relative group/men">
                                            <Link to="/" className='w-full block'>
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                    Men
                                                </Button>

                                                <div className='absolute top-0 left-full min-w-[150px] bg-white shadow-md
                                                                opacity-0 invisible translate-x-2
                                                                group-hover/men:opacity-100 group-hover/men:visible group-hover/men:translate-x-0
                                                                transition-all duration-300 z-50'>
                                                    <ul>
                                                        <li>
                                                            <Link to="/" className='w-full'>
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">
                                                                    T-Shirt
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/" className='w-full'>
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">
                                                                    Jeans
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/" className='w-full'>
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">
                                                                    Footwer
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/" className='w-full'>
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">
                                                                    Watch
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li >
                                                            <Link to="/" className='w-full'>
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">
                                                                    Clothes
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/" className='w-full'>
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">
                                                                    Sleepers
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>

                                            </Link>
                                        </li>
                                        <li className="list-none w-full !justify-start !text-left !rounded-none">
                                            <Link to="/" className='w-full'>
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                    Women
                                                </Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full !justify-start !text-left !rounded-none">
                                            <Link to="/" className='w-full'>
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                    Boys
                                                </Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full !justify-start !text-left !rounded-none">
                                            <Link to="/" className='w-full'>
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                    Girls
                                                </Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className='w-full'>
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full w-full !text-left !justify-start !rounded-none">
                                                    Kids
                                                </Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full ">
                                            <Link to="/" className='w-full'>
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                    Infants
                                                </Button>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>



                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Electronics
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Bags
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Footwear
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Groceries
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Beauty
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Wellness
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]  !py-4'>
                                        Jewellery</Button>
                                </Link>
                            </li>



                        </ul>
                    </div>

                    <div className="col_3 w-[20%] flex justify-end">
                        <p className='text-[10px] font-[500] flex items-center gap-2 mb-0 mt-0'>
                            <GoRocket />
                            Free International Delivery </p>
                    </div>

                </div>
            </nav>

            {/* Control Panels components */}
            <CategoryPanel isOpenCatPanel={isOpenCatPanel}
                setIsOpenCatPanel={setIsOpenCatPanel} />
        </>
    )
}

export default Navigation;