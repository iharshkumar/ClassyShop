import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@mui/material/Button';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const HomeSliderV2 = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={600}
            loop={true}
            autoplay={{
                delay: 1800,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
                clickable: true,
                type: 'bullets',
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="homeSliderV2"
        >
            <SwiperSlide>
                <div className="item w-[full] rounded-md overflow-hidden relative">
                    <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" alt="Banner 1" />

                    <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center 
                    flex-col justify-center transition-all duration-700'>
                        <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 '>
                            Big Saving Days Sale
                        </h4>
                        <h2 className='text-[38px] font-[700] w-full relative -right-[100%] opacity-0'>
                            Women Solid Round
                            Green T-Shirt
                        </h2>
                        <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>
                            Starting At Only
                            <span className='text-red-500 text-[40px] font-[700]'>$59.00</span>
                        </h3>
                        <div className='w-[75%] px-2 absolute bottom-0 opacity-0 btn_' style={{ padding: '70px', transform: 'translateY(100%)' }}>
                            <Button className='btn-org '>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="item w-[full] rounded-md overflow-hidden">
                    <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" alt="Banner 2" />
                    <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center 
                    flex-col justify-center transition-all duration-700'>
                        <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 '>
                            Big Saving Days Sale
                        </h4>
                        <h2 className='text-[38px] font-[700] w-full relative -right-[100%] opacity-0'>
                            Buy Modern Chair in Black Color
                        </h2>
                        <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>
                            Starting At Only
                            <span className='text-red-500 text-[40px] font-[700]'>$99.00</span>
                        </h3>
                        <div className='w-[75%] px-2 absolute bottom-0 opacity-0 btn_' style={{ padding: '70px', transform: 'translateY(100%)' }}>
                            <Button className='btn-org '>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default HomeSliderV2;
