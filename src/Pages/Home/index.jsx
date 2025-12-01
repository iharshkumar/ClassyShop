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
import Footer from '../../components/Footer';



const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />


      <section className='bg-white translate-y-15'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='leftSec'>
              <h2 className='text-[20px] font-[600]'>Popular Products </h2>
              <p className='text-[15px] font-[300]'>Do not miss the current offers until the end of March</p>
            </div>

            <div className='rightSec w-[60%]'>
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

      <section className="w-full bg-white translate-y-29 ">
        <div className="container bg-white w-full">
          <div className="freeShippng w-[80%] translate-x-12 border border-red-400 flex 
          items-center justify-between rounded-md ">
            <div className="col1 flex items-center gap-4 translate-x-3">
              <LiaShippingFastSolid className='text-[50px]' />
              <span className='text-[20px] font-[600] uppercase'>Free Shipping </span>
            </div>


            <div className="col2">
              <p className='text-[16px] mb-0 font-[500]'>Enjoy free shipping on all orders over $50. Shop now and save!</p>
            </div>

            <div className="col3">
              <button className='text-black py-2 px-4 rounded-md font-[500] text-[24px] -translate-x-3'>
                Shop Now
              </button>
            </div>

          </div>


          <AdsBannerSlider items={4} />


        </div>
      </section>

      <section className='translate-y-40 bg-white py-4 '>
        <div className='container bg-white flex flex-col  gap-5 '>
          <h2 className='text-[20px] font-[600] -translate-x-8'>Latest Products </h2>
          <div className='flex flex-col gap-5'>
            <ProductsSlider items={6} />
            <AdsBannerSlider items={3} />
          </div>
        </div>
      </section>


      <section className='translate-y-40 bg-white py-4 '>
        <div className='container bg-white flex flex-col  gap-5 '>
          <h2 className='text-[20px] font-[600] -translate-x-8 translate-y-5'>Featured Products</h2>
          <div className='flex flex-col gap-5'>
            <ProductsSlider items={6} />
            <AdsBannerSlider items={3} />

          </div>
        </div>
      </section>

      <section className='py-5 pt-0 pb-8 w-full translate-y-50 bg-white blogSection'>
        <div className='container'>
          <h2 className="text-[20px] -translate-x-8 font-[600] mb-4">From the Blogs</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider -translate-x-8"
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

      <Footer />
      <br/>
      <br/>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Home;