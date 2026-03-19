import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiOutlineDotsVertical } from "react-icons/hi";


const ITEM_HEIGHT = 48;


const AddressBox = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const removeAddress = (id) => {
        setAnchorEl(null);
        props?.removeAddress(id)

    }

    const editAddress = () => {
        setAnchorEl(null);
        props?.editAddress(props?.address?._id)
    }


    return (
        <div className='group addressBox relative !border !border-solid !border-[rgba(0,0,0,0.1)] bg-white flex flex-col gap-3 !p-5 !rounded-lg cursor-pointer !w-full hover:!border-[#2bbef9] hover:!shadow-lg transition-all duration-300'>
            <div className="flex items-center justify-between">
                <span className="inline-block !px-3 !py-1 !text-[11px] !font-bold !bg-[#f1faff] !text-[#2bbef9] !rounded-md uppercase tracking-wide border border-[#2bbef9]">
                    {props?.address?.addressType}
                </span>

                <div className='absolute top-[20px] right-[20px]'>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <HiOutlineDotsVertical />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            },
                            list: {
                                'aria-labelledby': 'long-button',
                            },
                        }}
                    >
                        <MenuItem onClick={editAddress}>
                            Edit
                        </MenuItem>
                        <MenuItem onClick={() => removeAddress(props?.address?._id)}>
                            Delete
                        </MenuItem>
                    </Menu>
                </div>

            </div>



            <div className='flex flex-col gap-1'>
                <h4 className="!text-[15px] !font-bold !m-0 !text-[#222]">
                    {props?.address?.fullName}
                </h4>
                <p className="!text-[13px] !text-[#666] !m-0">
                    <span className="font-bold text-[#888]">Mobile:</span> +{props?.address?.mobile}
                </p>
                <p className="!text-[13px] !text-[#666] !m-0 !leading-relaxed">
                    {props?.address?.address_line1}, {props?.address?.landmark && `${props?.address?.landmark}, `} {props?.address?.city}, {props?.address?.state}, {props?.address?.country} - <span className="font-semibold text-[#444]">{props?.address?.pincode}</span>
                </p>
            </div>
        </div>
    )
}

export default AddressBox   