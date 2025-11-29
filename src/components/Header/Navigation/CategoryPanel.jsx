import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { FiMinusSquare } from 'react-icons/fi';

const CategoryPanel = (props) => {

    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen);
    }


    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        };
    }

    const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setInnerSubmenuIndex(null);
        } else {
            setInnerSubmenuIndex(index);
        };
    }

    const DrawerList = (
        <Box sx={{ width: 250, paddingX: 2, paddingTop: 2 }} role="presentation" clasName="categoryPanel" >

            <h3 className='text-[16px] font-semibold flex items-center justify-between gap-2'>
                Shop By Categories
                <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px] p-2' />
            </h3>

            <div className="scroll">
                <ul className="w-full space-y-4">

                    {/* Fashion */}
                    <li className="list-none">

                        <div className="flex items-center justify-between">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                Fashion
                            </Button>

                            {submenuIndex === 0 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(0)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(0)} />
                            )}
                        </div>

                        {/* FIRST SUBMENU → AUTO EXPAND */}
                        {submenuIndex === 0 && (
                            <ul className="pl-4 mt-2 space-y-3">

                                <li className="list-none">

                                    <div className="flex items-center justify-between ">
                                        <Button className="translate-x-2 !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                            Appreal
                                        </Button>

                                        {innerSubmenuIndex === 0 ? (
                                            <FiMinusSquare className="cursor-pointer" onClick={() => openInnerSubmenu(0)} />
                                        ) : (
                                            <FaRegSquarePlus className="cursor-pointer" onClick={() => openInnerSubmenu(0)} />
                                        )}
                                    </div>

                                    {/* INNER SUBMENU → AUTO EXPAND */}
                                    {innerSubmenuIndex === 0 && (
                                        <ul className="pl-4 mt-2 translate-x-6 text-[15px] pb-3 mb-4">
                                            <li><Link to="/" className=" link block px-1">Smart Tablet</Link></li>
                                            <li><Link to="/" className=" link block px-1">Crepe T-Shirt</Link></li>
                                            <li><Link to="/" className=" link block px-1">Leather Watch</Link></li>
                                            <li><Link to="/" className=" link block px-1">Rolling Diamond</Link></li>
                                        </ul>
                                    )}

                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="list-none">

                        <div className="flex items-center justify-between pr-2">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                Electronics
                            </Button>

                            {submenuIndex === 1 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(1)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(1)} />
                            )}

                        </div>

                        {/* FIRST SUBMENU → AUTO EXPAND */}
                        {submenuIndex === 1 && (
                            <ul className="pl-5 mt-2 space-y-3">

                                <li className="list-none">
                                    <Button className="translate-x-2 !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                        Smart Watch
                                    </Button>
                                </li>
                                <li className="list-none">
                                    <Button className="translate-x-2  !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                        Laptops
                                    </Button>
                                </li>
                                <li className="list-none">

                                    <Button className="translate-x-2 !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                        Mobiles
                                    </Button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="list-none">

                        <div className="flex items-center justify-between pr-2">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                Bags
                            </Button>

                            {submenuIndex === 2 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(2)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(2)} />
                            )}

                        </div>

                        {/* FIRST SUBMENU → AUTO EXPAND */}
                        {submenuIndex === 2 && (
                            <ul className="pl-5 mt-2 space-y-3">

                                <li className="list-none">
                                    <Button className="translate-x-2 !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                        Women Bags                                    </Button>
                                </li>
                                <li className="list-none">
                                    <Button className="translate-x-2  !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                        Men Bags
                                    </Button>
                                </li>

                            </ul>
                        )}
                    </li>

                    <li className="list-none">

                        <div className="flex items-center justify-between pr-2">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                FootWear
                            </Button>

                            {submenuIndex === 3 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(3)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(3)} />
                            )}

                        </div>

                        {/* FIRST SUBMENU → AUTO EXPAND */}
                        {submenuIndex === 3 && (
                            <ul className="pl-5 mt-2 space-y-3">

                                <li className="list-none">
                                    <Button className="translate-x-2 !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                        Women FootWears
                                    </Button>
                                </li>
                                <li className="list-none">
                                    <Button className="translate-x-2  !px-1 !min-w-0 !text-left !text-[rgba(0,0,0,0.8)]">
                                        Men FootWears
                                    </Button>
                                </li>

                            </ul>
                        )}
                    </li>

                    <li className="list-none">

                        <div className="flex items-center justify-between pr-2">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                Groceries
                            </Button>

                            {submenuIndex === 4 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(4)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(4)} />
                            )}

                        </div>

                        
                    </li>

                    <li className="list-none">

                        <div className="flex items-center justify-between pr-2">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                Beauty
                            </Button>

                            {submenuIndex === 5 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(5)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(5)} />
                            )}

                        </div>

                        
                    </li>

                    <li className="list-none">

                        <div className="flex items-center justify-between pr-2">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                Wellness
                            </Button>

                            {submenuIndex === 6 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(6)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(6)} />
                            )}

                        </div>

                        
                    </li>

                    <li className="list-none">

                        <div className="flex items-center justify-between pr-2">
                            <Button className="!px-1 !min-w-0 !text-left !text-[rgba(0,0,0,2)]">
                                Jewellery
                            </Button>

                            {submenuIndex === 6 ? (
                                <FiMinusSquare className="cursor-pointer" onClick={() => openSubmenu(6)} />
                            ) : (
                                <FaRegSquarePlus className="cursor-pointer" onClick={() => openSubmenu(6)} />
                            )}

                        </div>

                        
                    </li>



                </ul>
            </div>



        </Box>
    );

    return (
        <>

            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

        </>
    )
}

export default CategoryPanel;