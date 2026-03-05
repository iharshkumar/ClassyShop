import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = (props) => {
  return (
    <div className='homeCatSlider !pt-2 pb-10 md:pb-12' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <div className='container'>
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 10 },
            768: { slidesPerView: 6, spaceBetween: 10 },
            1024: { slidesPerView: 8, spaceBetween: 10 },
            1280: { slidesPerView: 9, spaceBetween: 10 }
          }}
        >
          {
            props?.data?.map((cat, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to="/">
                    <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                      <img src={cat?.images[0]}
                        className='w-[60px] transition-all' />
                      <h3 className='text-[15px] font-[500] mt-2'>
                        {cat?.name}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>

              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider;