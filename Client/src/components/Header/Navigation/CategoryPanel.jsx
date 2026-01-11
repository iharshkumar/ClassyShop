import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { FiMinusSquare } from 'react-icons/fi';
import { CategoryCollapse } from '../../CategoryCollapse';

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

            <h3 className='text-[22px] font-[500] flex items-center justify-between gap-2'>
                Shop By Categories
                <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px] p-2' />
            </h3>

            <CategoryCollapse/>



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