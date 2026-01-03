import React, { useState } from 'react'
import SideBar from '../../components/SideBar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem';
import Pagination from '@mui/material/Pagination';
import ProductItemListView from '../../components/ProductItemListView';
import Button from '@mui/material/Button';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProductListing = () => {
    const [isItemView, setIsItemView] = useState('grid');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <section className='py-8 !pb-0'>
            <div className='container !px-10' style={{ padding: '15px' }}>
                <Breadcrumbs aria-label="breadcrumb" >
                    <Link underline="hover" color="inherit" href="/" className='link transition'>
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        className='link transition'
                    >
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>
            <div className='w-full bg-white py-3 mt-4' style={{ padding: '15px' }}>
                <div className='container flex gap-6'>
                    <div className='sidebarWrapper w-[20%]'>
                        <SideBar />
                    </div>


                    <div className='rightContent w-[80%] !py-3'>
                        <div className='!w-full !mb-2 !rounded-md flex items-center justify-between !p-2' style={{ backgroundColor: '#f1f1f1', minHeight: '50px' }}>
                            <div className='col1 flex items-center gap-2 itemViewActions'>
                                <Button className={`!w-[50%] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${isItemView === "list" ? "active" : ""}`}
                                    onClick={() => setIsItemView('list')}
                                >
                                    <LuMenu className='text-[rgbs(0,0,0,0.7)]' />
                                </Button>
                                <Button className={`!w-[50%] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${isItemView === "grid" ? "active" : ""}`}
                                    onClick={() => setIsItemView('grid')}
                                >
                                    <IoGridSharp className='text-[rgbs(0,0,0,0.7)]' />
                                </Button>
                                <h6 className='whitespace-nowrap m-0 text-[14px] font-[400] text-[rgba(0,0,0,0.7)]'>There are 27 products</h6>

                            </div>



                            <div className='col2 ml-auto flex items-center justify-end gap-2'>
                                <span className='whitespace-nowrap m-0 text-[14px] font-[400] text-[rgba(0,0,0,0.7)]'>Sort By</span>
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleMenuClick}
                                    className='!bg-white text-[14px] !text-[#000] text-capitalize border border-[#000]'
                                >
                                    Relevance
                                </Button>


                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] text-capitalize'>Sales,highest to lowest</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] text-capitalize'>Relevance</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] text-capitalize'>Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] text-capitalize'>Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] text-capitalize'>Price, low to high</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] text-capitalize'>Price, high to low</MenuItem>
                                </Menu>
                            </div>



                        </div>

                        <div className={`!py-6 grid ${isItemView === 'grid' ? '!grid-cols-4 !md:grid-cols-4 gap-4' :
                            '!grid-cols-1 !md:grid-cols-1 !gap-2'}`}>

                            {
                                isItemView === 'grid' ?
                                    <>
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </>
                                    :
                                    <>
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                    </>
                            }

                        </div>
                        <div className='flex items-center justify-center mt-10'>
                            <Pagination count={10} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductListing;
