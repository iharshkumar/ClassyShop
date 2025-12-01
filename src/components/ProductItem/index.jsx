import React from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdZoomOutMap } from 'react-icons/md';


const ProductItem = () => {
    return (
        <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>
            <div className="group imgWrapper w-[100] rounded-md relative">
                <Link to="/">
                    <div className='img  h-[220px] overflow-hidden '>

                        <img src='https://www.yellowbrick.co/wp-content/uploads/2023/08/fashion_blog_styling_blog_two-models-min-1024x683.jpg'
                            className='w-full  h-full object-fit ' />

                        <img src='https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill'
                            className='w-full transition-all duration-300 h-full object-fit absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105' />
                    </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-red-400 text-white 
                    rounded-lg p-1 text-[15px] font-[500]">
                    10%
                </span>
                <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 
                flex-col w-[45px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>

                    <Button className='!w-[35px] !h-[35px]  !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-red-500 hover:!text-white group'>
                        <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:text-white' />
                    </Button>


                    <Button className='!w-[35px] !h-[35px]  !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-red-500 hover:!text-white group'>
                        <IoGitCompareOutline className='text-[18px] !text-black group-hover:text-white hover:text-white' />
                    </Button>


                    <Button className='!w-[35px] !h-[35px]  !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-red-500 hover:!text-white group'>
                        <FaRegHeart className='text-[18px] !text-black group-hover:text-white hover:text-white' />
                    </Button>



                </div>
            </div>
            <div className='info p-3 bg-[#f1f1f1] py-5 '>
                <h6 className='text-[13px]'>
                    <Link to="/" className='link transition-all '>
                        Soylent Green
                    </Link>
                </h6>
                <h3 className='text-[13px] title mt-2 font-[500] translate-y-1 text-[#000]'>
                    <Link to="/" className='link transition-all'>
                        Women's Fashionable Clothes
                    </Link>
                </h3>

                <Rating name="size-small" defaultValue={2} size="small" readOnly />


                <div className='flex items-center gap-3'>
                    <span className='oldPrice line-through text-grey-500 text-[15px] font-[500]'>
                        $45.00
                    </span>
                    <span className='price text-red-600 text-[15px] font-[600]'>
                        $34.00
                    </span>
                </div>

            </div>



        </div >

    )
}

export default ProductItem;