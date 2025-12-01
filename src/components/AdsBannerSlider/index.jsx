import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import BannerBox from '../BannerBox';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const AdsBannerSlider = (props) => {
    return (
        <div className='py-5 w-full'>
           <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="smlBtn translate-y-3 -translate-x-8"
            >
                <SwiperSlide>
                    <BannerBox img ={'banner1.jpg'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img ={'banner2.webp'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img ={'banner6.webp'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img ={'banner4.webp'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img ={'banner5.webp'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img ={'banner6.webp'} link={'/'}/>
                </SwiperSlide>
                
            </Swiper>
        </div>


    )
}

export default AdsBannerSlider;