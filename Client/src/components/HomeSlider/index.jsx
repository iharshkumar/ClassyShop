import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = (props) => {
    return (
        <div className='homeSlider !pt-4 md:pt-6 pb-6 md:pb-8'>
            <div className='container'>

                <Swiper
                    loop={true}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    centeredSlides={true}
                    slidesPerView={1.1}
                    breakpoints={{
                        1024: { slidesPerView: 1.1 },
                    }}
                    className="sliderHome !overflow-visible"
                >
                    {
                        props?.data?.length !== 0 && props?.data?.map((item, index) => {
                            const imgSrc = Array.isArray(item?.images) ? item?.images?.[0] : item?.images;
                            return (
                                <SwiperSlide key={index}>
                                    <div className='item rounded-[20px] overflow-hidden'>
                                        <img src={imgSrc}
                                            alt="Banner Slide"
                                            className='w-full h-full object-cover'
                                            loading="lazy"
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;
