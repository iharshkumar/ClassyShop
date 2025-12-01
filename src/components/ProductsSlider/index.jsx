import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import ProductItem from '../ProductItem';

const ProductsSlider = (props) => {
    return (
        <div className='ProductsSlider'>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper -translate-x-8"
            >
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>


                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default ProductsSlider;