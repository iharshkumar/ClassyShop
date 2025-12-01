import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Navigation from "./Navigation/index.jsx";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));


const Header = () => {
    return (
        <header className="bg-white">
            <div className="top-strip py-2 border-t-[1px] border-grey-250 border-b-[1px] mb-4 ">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]">
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-4">
                                <li className="list-none">
                                    <Link to="/help-center" className="text-[13px] link font-[500]
                                    transition">Help Center</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/Track-Your-Order"
                                        className="text-[13px] link font-[500] transition">
                                        Track Your Order

                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="header border-b-[1px] border-grey-250 mb-4 pt-1 ">
                <div className="container flex items-center justify-between py-2 px-4 gap-6 h-16">
                    <div className="col1 w-[25%] ">
                        <Link to="/">
                            <img src="/logo.jpg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="col2 w-[45%] flex items-center justify-center">
                        {/* Search Component */}
                        <Search />
                    </div>

                    <div className="col3 w-[30%] flex items-center  translate-x-5 pr-10">
                        {/* Additional header content can go here */}
                        <ul className="flex items-center justify-end gap-3 w-full">
                            <li className="list-none">
                                {/* Placeholder for future icons or links */}
                                <Link to="/login" className="link transition text-[15px] font-[500]" >Login </Link>
                                | &nbsp;
                                <Link to="/register" className="link transition text-[15px] font-[500]">Register</Link>
                            </li>


                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <ShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>

            <Navigation />


        </header>
    );
};

export default Header;
