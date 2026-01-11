import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from 'react-icons/lia';
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import HomeSliderV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/bannerBoxV2';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';



const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <HomeSlider /> */}


      <section className='py-6' style={{ paddingTop: '20px' }}>
        <div className='container flex w-[50%] mx-auto justify-start gap-5'>
          <div className='part1 w-[70%] ' >
            <HomeSliderV2 />
          </div>

          <div className='part2 w-[30%] pl-5 flex items-center gap-5 justify-between flex-col'>
            <BannerBoxV2 
              info="Left" 
              image={'https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg'}
              title="Iphone 16 Pro Max"
              subtitle="Apple"
              price="$169.00"
              linkText="SHOP NOW"
              linkTo="/"
            />
            
            <BannerBoxV2 
              info="right" 
              image={'https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg'}
              title="Summer Collection"
              subtitle="Nike"
              price="$89.99"
              linkText="EXPLORE"
              linkTo="/products"
            />
          </div>

        </div>
      </section>

      <HomeCatSlider />

      <section className='bg-white pt-12 md:pt-16 pb-8 md:pb-12'>
        <div className='container'>
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6'>
            <div className='leftSec'>
              <h2 className='text-[20px] font-[600] !mt-3'>Popular Products </h2>
              <p className='text-[15px] font-[300] !-mt-2'>Do not miss the current offers until the end of March</p>
            </div>

            <div className='rightSec w-full md:w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwears" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellwey" />
              </Tabs>
            </div>

          </div>

          <ProductsSlider items={6} />
        </div>

      </section>

      <section className="!w-full bg-white pt-12 md:pt-16 pb-8 md:pb-12" style={{ paddingTop: '30px' }}>
        <div className="container bg-white w-full">
          <div className="freeShippng w-full bg-gradient-to-r from-red-50 to-orange-50 flex 
          flex-col md:flex-row items-center justify-between gap-6 md:gap-8 rounded-lg p-8 md:p-10 mb-8 shadow-sm">
            <div className="col1 flex items-center gap-4 md:gap-5">
              <LiaShippingFastSolid className='text-[40px] md:text-[60px] text-primary' style={{ paddingLeft: '20px' }} />
              <span className='text-[18px] md:text-[24px] font-[600] uppercase'>Free Shipping </span>
            </div>

            <div className="col2 flex-1 text-center md:text-left px-4">
              <p className='text-[14px] md:text-[18px] mb-0 font-[500]' style={{ paddingLeft: '100px' }}>Enjoy free shipping on all orders over $50. Shop now and save!</p>
            </div>

            <div className="col3">
              <button className='bg-primary !text-black py-3 px-8 md:px-10 rounded-md font-[500] text-[16px] md:text-[18px] ' style={{ paddingRight: '20px' }}>
                Shop Now
              </button>
            </div>

          </div>

          <AdsBannerSliderV2 items={4} />

        </div>
      </section>

      <section className='bg-white pt-12 md:pt-16 pb-8 md:pb-12'>
        <div className='container bg-white flex flex-col gap-6'>
          <h2 className='text-[20px] font-[600]' style={{ paddingTop: '30px' }}>Latest Products </h2>
          <div className='flex flex-col gap-6'>
            <ProductsSlider items={6} />
            <AdsBannerSlider items={3} />
          </div>
        </div>
      </section>

      <section className='bg-white pt-12 md:pt-16 pb-8 md:pb-12'>
        <div className='container bg-white flex flex-col gap-6'>
          <h2 className='text-[20px] font-[600]' style={{ paddingTop: '30px' }}>Featured Products</h2>
          <div className='flex flex-col gap-6'>
            <ProductsSlider items={6} />
            <AdsBannerSlider items={3} />
          </div>
        </div>
      </section>

      <section className='pt-12 md:pt-16 pb-16 md:pb-20 w-full bg-white blogSection'>
        <div className='container'>
          <h2 className="text-[20px] font-[600] mb-6" style={{ paddingTop: '30px' }}>From the Blogs</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 }
            }}
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

          </Swiper>
        </div>

      </section>

    
    </>
  )
}

export default Home;