import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { BiExport, BiSolidCategoryAlt } from 'react-icons/bi'
import { IoBagAddOutline } from 'react-icons/io5'
import { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';
import { MdBrandingWatermark, MdFilterVintage, MdRateReview } from 'react-icons/md';
import { BsPatchCheckFill } from 'react-icons/bs';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';

const ProductDetails = () => {
    const [product, setProduct] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    const { id } = useParams()
    useEffect(() => {
        fetchDataFromApi(`/api/product/${id}`).then((res) => {
            if (res?.error === false) {
                setTimeout(() => {
                    setProduct(res?.product)
                }, 2000);
            }
        })
    }, [])

    const handleSlideChange = (swiper) => {
        const activeIndex = swiper.activeIndex;
        setSlideIndex(activeIndex);
        if (zoomSliderSml.current && zoomSliderSml.current.swiper) {
            zoomSliderSml.current.swiper.slideTo(activeIndex);
        }
    }

    return (
        <>
            <div className='flex items-center justify-between !px-2 !py-0 !mt-3 !mb-3   '>
                <h1 className='text-[20px] font-[600]'>Products Details</h1>
            </div>

            {
                product?._id !== "" && product?._id !== undefined && product?._id !== null ?
                    <>
                        <div className='productDetails flex'>
                            <div className='w-[40%]'>
                                {
                                    product?.images?.length !== 0 &&
                                    <div className='flex gap-3'>
                                        <div className='slider w-[12%]'>
                                            <Swiper
                                                ref={zoomSliderSml}
                                                direction={'vertical'}
                                                slidesPerView={5}
                                                spaceBetween={0}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className={`zoomProductSliderThumbs !h-[440px] !overflow-hidden  ${product?.images?.length > 5 && 'space'}`}

                                            >
                                                {
                                                    product?.images?.map((item, index) => {
                                                        return (
                                                            <SwiperSlide key={index}>
                                                                <div className={`rounded-md overflow-hidden cursor-pointer transition-all duration-300 
                                                    ${slideIndex === index ? 'opacity-100' : 'opacity-30 '}`}
                                                                    onClick={() => goto(index)}>
                                                                    <img src={item}
                                                                        className='w-full transition-all group-hover:scale-105' />
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }
                                            </Swiper>
                                        </div>

                                        <div className='zoomContainer w-[330px] !h-[450px] overflow-hidden !rounded-md'>
                                            <Swiper
                                                ref={zoomSliderBig}
                                                slidesPerView={1}
                                                spaceBetween={10}
                                                navigation={false}
                                                onSlideChange={handleSlideChange}
                                            >
                                                {
                                                    product?.images?.map((item, index) => {
                                                        return (
                                                            <SwiperSlide key={index}>
                                                                <InnerImageZoom
                                                                    zoomType="hover"
                                                                    zoomScale={1}
                                                                    src={item} />
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }
                                            </Swiper>
                                        </div>
                                    </div>
                                }

                            </div>

                            <div className='w-[60%]'>
                                <h1 className='text-[25px] font-[500] !mb-4'>{product?.name}</h1>

                                <div className='flex items-center !py-1'>
                                    <span className='w-[20%] font-[500] flex items-center gap-2 text-[14px]'>
                                        <MdBrandingWatermark className='opacity-65' />Brand :</span>
                                    <span className='text-[14px]'>{product?.brand}</span>
                                </div>

                                <div className='flex items-center !py-1'>
                                    <span className='w-[20%] font-[500] flex items-center gap-2 text-[14px]'>
                                        <BiSolidCategoryAlt className='opacity-65' />Category :</span>
                                    <span className='text-[14px]'>{product?.catName}</span>
                                </div>

                                {
                                    product?.productRam?.length !== 0 &&
                                    <div className='flex items-center !py-1'>
                                        <span className='w-[20%] font-[500] flex items-center gap-2 text-[14px]'>
                                            <MdFilterVintage className='opacity-65' />RAM :</span>

                                        <div className='flex items-center gap-2'>
                                            {
                                                product?.productRam?.map((ram, index) => {
                                                    return (
                                                        <span className='inline-block !p-1 !shadow-sm !bg-[#fff] text-[1 2px] font-[500]' key={index}>{ram}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }

                                {
                                    product?.size?.length !== 0 &&
                                    <div className='flex items-center !py-1'>
                                        <span className='w-[20%] font-[500] flex items-center gap-2 text-[14px]'>
                                            <MdFilterVintage className='opacity-65' />Size :</span>

                                        <div className='flex items-center gap-2'>
                                            {
                                                product?.size?.map((size, index) => {
                                                    return (
                                                        <span className='inline-block !p-1 !shadow-sm !bg-[#fff] text-[1 2px] font-[500]' key={index}>{size}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }

                                {
                                    product?.productWeight?.length !== 0 &&
                                    <div className='flex items-center !py-1'>
                                        <span className='w-[20%] font-[500] flex items-center gap-2 text-[14px]'>
                                            <MdFilterVintage className='opacity-65' />Weight :</span>

                                        <div className='flex items-center gap-2'>
                                            {
                                                product?.productWeight?.map((weight, index) => {
                                                    return (
                                                        <span className='inline-block !p-1 !shadow-sm !bg-[#fff] text-[1 2px] font-[500]' key={index}>{weight}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }

                                <div className='flex items-center !py-1'>
                                    <span className='w-[20%] font-[500] flex items-center gap-2 text-[14px]'>
                                        <MdRateReview className='opacity-65' />Reviews :</span>
                                    <span className='text-[14px]'>({product?.reviews?.length > 0 ? product?.reviews?.length : 0}) Review</span>
                                </div>

                                <div className='flex items-center !py-1'>
                                    <span className='w-[20%] font-[500] flex items-center gap-2 text-[14px]'>
                                        <BsPatchCheckFill className='opacity-65' />Published :</span>
                                    <span className='text-[14px]'>{product?.createdAt?.split("T")[0]}</span>
                                </div>

                                <h2 className='text-[25px] font-[500] !mb-3'>Product Description</h2>
                                {
                                    product?.description && <p className='text-[14px] w-[75%]'>{product?.description}</p>
                                }
                            </div>
                        </div>
                        
                        <h2 className='text-[18px] font-[500] !mt-3'>Customer Reviews</h2>
                        <div className='reviewWrap !mt-3'>
                            <div className='w-full !h-auto !mb-3 !p-4 !bg-white !rounded-sm !shadow-md flex items-center justify-between'>
                                <div className='flex items-center gap-8'>
                                    <div className='img w-[85px] !h-[85px] !rounded-full overflow-hidden  !border-3 !border-[#2b62c6] '>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s"
                                            className='w-full !h-full object-cover' />
                                    </div>


                                    <div className='info w-[80%]'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='text-[16px] font-[500]'>Harsh Kumar</h4>
                                            <Rating name="read-only" value={5} readOnly size='small' />
                                        </div>
                                        <span className='text-[13px]'>2026-02-27</span>

                                        <p className='text-[13px] !mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                </div>
                            </div>

                            <div className='w-full !h-auto !mb-3 !p-4 !bg-white !rounded-sm !shadow-md flex items-center justify-between'>
                                <div className='flex items-center gap-8'>
                                    <div className='img w-[85px] !h-[85px] !rounded-full overflow-hidden  !border-3 !border-[#2b62c6] '>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s"
                                            className='w-full !h-full object-cover' />
                                    </div>


                                    <div className='info w-[80%]'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='text-[16px] font-[500]'>Harsh Kumar</h4>
                                            <Rating name="read-only" value={5} readOnly size='small' />
                                        </div>
                                        <span className='text-[13px]'>2026-02-27</span>

                                        <p className='text-[13px] !mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                </div>
                            </div>

                            <div className='w-full !h-auto !mb-3 !p-4 !bg-white !rounded-sm !shadow-md flex items-center justify-between'>
                                <div className='flex items-center gap-8'>
                                    <div className='img w-[85px] !h-[85px] !rounded-full overflow-hidden  !border-3 !border-[#2b62c6] '>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s"
                                            className='w-full !h-full object-cover' />
                                    </div>


                                    <div className='info w-[80%]'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='text-[16px] font-[500]'>Harsh Kumar</h4>
                                            <Rating name="read-only" value={5} readOnly size='small' />
                                        </div>
                                        <span className='text-[13px]'>2026-02-27</span>

                                        <p className='text-[13px] !mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                </div>
                            </div>

                            <div className='w-full !h-auto !mb-3 !p-4 !bg-white !rounded-sm !shadow-md flex items-center justify-between'>
                                <div className='flex items-center gap-8'>
                                    <div className='img w-[85px] !h-[85px] !rounded-full overflow-hidden  !border-3 !border-[#2b62c6] '>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s"
                                            className='w-full !h-full object-cover' />
                                    </div>


                                    <div className='info w-[80%]'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='text-[16px] font-[500]'>Harsh Kumar</h4>
                                            <Rating name="read-only" value={5} readOnly size='small' />
                                        </div>
                                        <span className='text-[13px]'>2026-02-27</span>

                                        <p className='text-[13px] !mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full !h-auto !mb-3 !p-4 !bg-white !rounded-sm !shadow-md flex items-center justify-between'>
                                <div className='flex items-center gap-8'>
                                    <div className='img w-[85px] !h-[85px] !rounded-full overflow-hidden  !border-3 !border-[#2b62c6] '>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s"
                                            className='w-full !h-full object-cover' />
                                    </div>


                                    <div className='info w-[80%]'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='text-[16px] font-[500]'>Harsh Kumar</h4>
                                            <Rating name="read-only" value={5} readOnly size='small' />
                                        </div>
                                        <span className='text-[13px]'>2026-02-27</span>

                                        <p className='text-[13px] !mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </>
                    :
                    <div className='flex items-center justify-center !h-96'>
                        <CircularProgress color='inherit' />
                    </div>
            }




            <br />


        </>
    )
}

export default ProductDetails