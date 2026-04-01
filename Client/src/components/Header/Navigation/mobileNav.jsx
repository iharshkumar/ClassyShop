import React from 'react'
import Button from '@mui/material/Button'
import { IoHomeOutline, IoSearch } from 'react-icons/io5'
import { LuHeart } from 'react-icons/lu'
import { BsBagCheck } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
    return (
        <div className='mobileNav !bg-white !p-1 !px-3 w-full grid grid-cols-5 !fixed !bottom-0 !left-0 !place-items-center z-[51]'>
            <NavLink to="/" exact={true} activeClassName="isActive" >
                <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
                    <IoHomeOutline size={18} />
                    <span className='text-[14px]'>Home</span>
                </Button>
            </NavLink>

            <NavLink to="/search" exact={true} activeClassName="isActive" >
                <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
                    <IoSearch size={18} />
                    <span className='text-[14px]'>Search</span>
                </Button>
            </NavLink>

            <NavLink to="/my-list" exact={true} activeClassName="isActive" >
                <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
                    <LuHeart size={18} />
                    <span className='text-[14px]'>Wishlist</span>
                </Button>
            </NavLink>

            <NavLink to="/my-orders" exact={true} activeClassName="isActive" >
                <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
                    <BsBagCheck size={18} />
                    <span className='text-[14px]'>Orders</span>
                </Button>
            </NavLink>

            <NavLink to="/my-account" exact={true} activeClassName="isActive" >
                <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
                    <FiUser size={18} />
                    <span className='text-[14px]'>Profile</span>
                </Button>
            </NavLink>
        </div>
    )
}

export default MobileNav