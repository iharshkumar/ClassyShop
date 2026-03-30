import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiGift } from "react-icons/fi";
import { Navigation } from 'swiper/modules';
import { IoStatsChartSharp } from "react-icons/io5";
import { IoPieChart } from "react-icons/io5";
import { AiOutlineBank } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { MyContext } from '../../App';

const DashboardBoxes = (props) => {

    const context = useContext(MyContext);
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={context?.windowWidth > 992 ? true : false}
            modules={[Navigation]}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }}
            className="dashboardBoxesSlider"
        >
            <SwiperSlide>
                <div className='box !p-5 cursor-pointer hover:!bg-[#fafafa] !rounded-md !border !border-[rgba(0,0,0,0.1)] flex items-center gap-4 !bg-[#A527C4]'>
                    <FiGift className='text-[50px] text-[#fff]' />
                    <div className='info w-[70%] '>
                        <h3 className='text-[#fff]'>Total Users</h3>
                        <b className='text-[#fff]'>{props?.users}</b>
                    </div>
                    <IoStatsChartSharp className='text-[50px] text-[#fff]' />
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className='box !bg-green-500 !p-5 cursor-pointer hover:!bg-[#fafafa] !rounded-md !border !border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                    <IoPieChart className='text-[50px] text-[#fff]' />
                    <div className='info w-[70%] '>
                        <h3 className='text-[#fff]'>New Orders</h3>
                        <b className='text-[#fff]'>{props?.orders}</b>
                    </div>
                    <IoStatsChartSharp className='text-[50px] text-[#fff]' />
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className='box !bg-red-500 !p-5 cursor-pointer hover:!bg-[#fafafa] !rounded-md !border !border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                    <AiOutlineBank className='text-[50px] text-[#fff]' />
                    <div className='info w-[70%] '>
                        <h3 className='text-[#fff]'>Total Category</h3>
                        <b className='text-[#fff]'>{props?.category}</b>
                    </div>
                    <IoStatsChartSharp className='text-[50px] text-[#fff]' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='box !bg-red-500 !p-5 cursor-pointer hover:!bg-[#fafafa] !rounded-md !border !border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                    <BsCart4 className='text-[50px] text-[#fff]' />
                    <div className='info w-[70%] '>
                        <h3 className='text-[#fff]'>Total Product</h3>
                        <b className='text-[#fff]'>{props?.products}</b>
                    </div>
                    <IoStatsChartSharp className='text-[50px] text-[#fff]' />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default DashboardBoxes