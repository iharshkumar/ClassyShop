import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoGitCompareOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import AdsBannerSlider from '../../components/AdsBannerSlider';
import ProductDetailsComponents from '../../components/ProductDetails';

export const ProductDetails = () => {

    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className='!py-4 !pb-0'>
                <div className='container !p-2 !pb-5'>
                    <Breadcrumbs aria-label="breadcrumb" >
                        <Link underline="hover" color="inherit" href="/" className='link transition text-[14px]'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition !text-[14px]'
                        >
                            Fashion
                        </Link>
                        <Link
                            underline="hover"
                            className='link transition text-[14px]'
                        >
                            Cotton Dye Tracksuit
                        </Link>
                    </Breadcrumbs>
                </div>


            </div>



            <section className='!bg-white !py-5' >
                <div className='container flex gap-8 items-center'>
                    <div className='productZoomContainer w-[30%] '>
                        <ProductZoom />
                    </div>

                    <div className='productContent w-[60%] !pr-10 !pl=10'>
                        <ProductDetailsComponents/>
                    </div>
                </div>


                <div className='container w-full !mt-8'>
                    <div className='flex items-center gap-7 !mb-5'>
                        <span className={`link text-[16px] cursor-pointer font-[500] ${activeTab === 0 && 'text-red-500'}`}
                            onClick={() => setActiveTab(0)}>
                            Description
                        </span>
                        <span className={`link text-[16px] cursor-pointer font-[500] ${activeTab === 1 && 'text-red-500'}`}
                            onClick={() => setActiveTab(1)}>
                            Product Details
                        </span>
                        <span className={`link text-[16px] cursor-pointer font-[500] ${activeTab === 2 && 'text-red-500'}`}
                            onClick={() => setActiveTab(2)}>
                            Reviews(5)
                        </span>
                    </div>

                    {
                        activeTab === 0 &&
                        <div className='shadow-md w-full !py-5 !p-8 rounded-md'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>


                            <h4>Lightweight Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>

                            <h4>Free Shipping & Return</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>

                            <h4>Money Back Gurantee</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>

                            <h4>Online Support</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.ac
                            </p>



                        </div>
                    }

                    {
                        activeTab === 1 &&
                        <div className='shadow-md w-full !py-5 !p-8 rounded-md'>

                            <div class="relative overflow-x-auto bg-neutral-primary-soft !shadow-xs rounded-base !border !border-default">
                                <table class="w-full text-sm text-left rtl:text-right text-body">
                                    <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                                        <tr>
                                            <th scope="col" class="!px-6 !py-3 font-medium">
                                                Stand Up                                        </th>
                                            <th scope="col" class="!px-6 !py-3 font-medium">
                                                Folded (w/o wheels)
                                            </th>
                                            <th scope="col" class="!px-6 !py-3 font-medium">
                                                Folded (w/ wheels)
                                            </th>
                                            <th scope="col" class="!px-6 !py-3 font-medium">
                                                Door Pass Through
                                            </th>
                                            <th scope="col" class="!px-6 !py-3 font-medium">
                                                Frame
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="!bg-neutral-primary border-b !border-default">

                                            <td class="!px-6 !py-4">
                                                35″L x 24″W x 37-45″H(front to back wheel)
                                            </td>

                                            <td class="!px-6 !py-4">
                                                32.5″L x 18.5″W x 16.5″H
                                            </td>
                                            <td class="!px-6 !py-4">
                                                32.5″L x 24″W x 18.5″H
                                            </td>
                                            <td class="!px-6 !py-4">
                                                $24
                                            </td>
                                            <td class="!px-6 !py-4">
                                                Aluminum
                                            </td>
                                        </tr>


                                        <tr class="!bg-neutral-primary border-b !border-default">

                                            <td class="!px-6 !py-4   font-[500]">
                                                35″L x 24″W x 37-45″H(front to back wheel)
                                            </td>

                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 18.5″W x 16.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 24″W x 18.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                $24
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                Aluminum
                                            </td>
                                        </tr>
                                        <tr class="!bg-neutral-primary border-b !border-default">

                                            <td class="!px-6 !py-4   font-[500]">
                                                35″L x 24″W x 37-45″H(front to back wheel)
                                            </td>

                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 18.5″W x 16.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 24″W x 18.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                $24
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                Aluminum
                                            </td>
                                        </tr>
                                        <tr class="!bg-neutral-primary border-b !border-default">

                                            <td class="!px-6 !py-4   font-[500]">
                                                35″L x 24″W x 37-45″H(front to back wheel)
                                            </td>

                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 18.5″W x 16.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 24″W x 18.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                $24
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                Aluminum
                                            </td>
                                        </tr>
                                        <tr class="!bg-neutral-primary border-b !border-default">

                                            <td class="!px-6 !py-4   font-[500]">
                                                35″L x 24″W x 37-45″H(front to back wheel)
                                            </td>

                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 18.5″W x 16.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                32.5″L x 24″W x 18.5″H
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                $24
                                            </td>
                                            <td class="!px-6 !py-4 font-[500]">
                                                Aluminum
                                            </td>
                                        </tr>




                                    </tbody>
                                </table>
                            </div>
                        </div>

                    }
                    {
                        activeTab === 2 &&
                        <div className='shadow-md w-[80%] !py-5 !p-8 rounded-md'>
                            <div className='w-full productReviewContainer'>
                                <h2 className='text-[18px]'>Customer question & Answers</h2>


                                <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll 
                                overflow-x-hidden !mt-5 !pr-5'>

                                    <div className='review !pt-5 w-full flex items-center justify-between !pb-5 !border-b !border-[rgba(0,0,0,0.1)]'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[90px] h-[90px] overflow-hidden !rounded-full '>
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg "
                                                    className='w-full' />
                                            </div>
                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'>Rinku Verma</h4>
                                                <h5 className='text-[13px] !mb-0'>2024-12-01</h5>
                                                <p className='!mt-0 !mb-0'>Nice Product</p>
                                            </div>




                                        </div>
                                        <Rating name="size-small"
                                            defaultValue={4}
                                            readOnly />
                                    </div>
                                    <div className='review !pt-5 w-full flex items-center justify-between !pb-5 !border-b !border-[rgba(0,0,0,0.1)]'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[90px] h-[90px] overflow-hidden !rounded-full '>
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg "
                                                    className='w-full' />
                                            </div>
                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'>Rinku Verma</h4>
                                                <h5 className='text-[13px] !mb-0'>2024-12-01</h5>
                                                <p className='!mt-0 !mb-0'>Nice Product</p>
                                            </div>




                                        </div>
                                        <Rating name="size-small"
                                            defaultValue={4}
                                            readOnly />
                                    </div>
                                    <div className='review !pt-5 w-full flex items-center justify-between !pb-5 !border-b !border-[rgba(0,0,0,0.1)]'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[90px] h-[90px] overflow-hidden !rounded-full '>
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg "
                                                    className='w-full' />
                                            </div>
                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'>Rinku Verma</h4>
                                                <h5 className='text-[13px] !mb-0'>2024-12-01</h5>
                                                <p className='!mt-0 !mb-0'>Nice Product</p>
                                            </div>




                                        </div>
                                        <Rating name="size-small"
                                            defaultValue={4}
                                            readOnly />
                                    </div>
                                    <div className='review !pt-5 w-full flex items-center justify-between !pb-5 !border-b !border-[rgba(0,0,0,0.1)]'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[90px] h-[90px] overflow-hidden !rounded-full '>
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg "
                                                    className='w-full' />
                                            </div>
                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'>Rinku Verma</h4>
                                                <h5 className='text-[13px] !mb-0'>2024-12-01</h5>
                                                <p className='!mt-0 !mb-0'>Nice Product</p>
                                            </div>




                                        </div>
                                        <Rating name="size-small"
                                            defaultValue={4}
                                            readOnly />
                                    </div>
                                    <div className='review !pt-5 w-full flex items-center justify-between !pb-5 !border-b !border-[rgba(0,0,0,0.1)]'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[90px] h-[90px] overflow-hidden !rounded-full '>
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg "
                                                    className='w-full' />
                                            </div>
                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'>Rinku Verma</h4>
                                                <h5 className='text-[13px] !mb-0'>2024-12-01</h5>
                                                <p className='!mt-0 !mb-0'>Nice Product</p>
                                            </div>




                                        </div>
                                        <Rating name="size-small"
                                            defaultValue={4}
                                            readOnly />
                                    </div>
                                    <div className='review !pt-5 w-full flex items-center justify-between !pb-5 !border-b !border-[rgba(0,0,0,0.1)]'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[90px] h-[90px] overflow-hidden !rounded-full '>
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg "
                                                    className='w-full' />
                                            </div>
                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'>Rinku Verma</h4>
                                                <h5 className='text-[13px] !mb-0'>2024-12-01</h5>
                                                <p className='!mt-0 !mb-0'>Nice Product</p>
                                            </div>




                                        </div>
                                        <Rating name="size-small"
                                            defaultValue={4}
                                            readOnly />
                                    </div>
                                </div>

                                <br />

                                <div className='reviewForm !bg-[#f1f1f1] !p-4 !rounded-md'>
                                    <h2 className='text-[18px]'>Add a Review </h2>
                                    <form className='w-full !mt-5'>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Write a Review.."
                                            className='w-full !mb-6'
                                            multiline
                                            rows={6}
                                        />
                                        <br />
                                        <Rating name="size-small"
                                            defaultValue={4}
                                            readOnly />
                                        <div className='flex items-center !mt-5'>
                                            <Button className='btn-org !rounded-lg'>Submit Review</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className='container !pt-3'>
                    <h2 className='text-[20px] font-[600] !pb-5' style={{ paddingTop: '30px' }}>Related Products </h2>
                    <div className='flex flex-col gap-6 !pb-0'>
                        <ProductsSlider items={6} />
                    </div>
                </div>
            </section>


        </>
    )
}

export default ProductDetails;