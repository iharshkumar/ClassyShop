import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import BannerBox from '../BannerBox';
import BannerBoxV2 from '../bannerBoxV2';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const AdsBannerSlider = (props) => {
    return (
        <div className='py-5 w-full' style={{ paddingTop: '30px' }}>
           <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="smlBtn"
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  640: { slidesPerView: 2, spaceBetween: 10 },
                  768: { slidesPerView: 3, spaceBetween: 10 },
                  1024: { slidesPerView: props.items > 4 ? 4 : props.items, spaceBetween: 10 },
                  1280: { slidesPerView: props.items, spaceBetween: 10 }
                }}
            >
                <SwiperSlide>
                    <BannerBoxV2 info="Left" 
              image={'https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg'}
               link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="Left" 
              image={'https://serviceapi.spicezgold.com/download/1763531275315_1737020756772_New_Project_1.png'}
               link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="right" 
              image={'https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg'}
               link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="right" 
              image={'https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg'}
               link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="Left" 
              image={'https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg'}
               link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="Left" 
              image={'https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg'}
               link={'/'}/>
                </SwiperSlide>
                
            </Swiper>
        </div>


    )
}

export default AdsBannerSlider;