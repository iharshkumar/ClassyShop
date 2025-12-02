import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-8 md:pt-10 pb-10 md:pb-12' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <div className='container'>
        <Swiper
          slidesPerView={9}
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
          <SwiperSlide>
            <Link to="/">
              <div className='item py-10 px-3 bg-white rounded-sm text-center flex 
              items-center justify-center flex-col  '>
                <img src="https://image.made-in-china.com/365f3j00lwbIfYyEOgUh/Android-Tablet-PC-RAM-8GB-ROM-256GB-10-9-Inch-HD-Screen-Flat-Computer.webp"
                  className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Smart Tablet
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-wristwatch-analog-classic-brown-leather-strap-watch-png-image_11666089.png" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Leather Watch
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/035/440/902/small/ai-generated-wooden-chair-isolated-on-transparent-background-free-png.png" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Wooden Chair
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://png.pngtree.com/png-vector/20240626/ourmid/pngtree-red-white-sneaker-transparent-background-png-image_12861690.png" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Sneakers
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://static.vecteezy.com/system/resources/previews/046/429/980/non_2x/luxury-premium-blue-women-s-bag-purse-made-of-leather-isolated-on-a-transparent-background-blue-purse-women-s-small-bag-handbag-free-png.png" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Purse
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://png.pngtree.com/png-vector/20250304/ourmid/pngtree-sleek-modern-laptop-with-high-resolution-display-png-image_15711292.png" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Laptop
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvQ9SFaHj-DCX2MBBXV9_brmclYatuxVkEQ&s" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Refrigerator
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-a-hanging-rope-png-image_13178811.png" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Rope
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9W8zoLXMmSdE39xWDEIH5ZM5McbK6aldrfw&s" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Knife
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlcWsYdk9srq-JVy5QBUMHXcKfrJTVC-IjQ&s" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Plastic Stool
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://freepngimg.com/thumb/water_bottle/165014-water-flask-bottle-free-hq-image-thumb.png" className='w-[60px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Bottle
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col  '>
                <img src="https://www.shutterstock.com/image-vector/acoustic-guitardreadnought-style-cutaway-natural-600nw-2142993959.jpg" className='w-[55px]' />
                <h3 className='text-[15px] font-[500] mt-2'>
                  Guitar
                </h3>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider;