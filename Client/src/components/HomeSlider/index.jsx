import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider pt-4 md:pt-6 pb-6 md:pb-8'>
            <div className='container'>

                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    className="sliderHome">
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://t4.ftcdn.net/jpg/03/48/05/47/360_F_348054737_Tv5fl9LQnZnzDUwskKVKd5Mzj4SjGFxa.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/006/642/998/small/online-shopping-on-website-e-commerce-applications-and-digital-marketing-hand-holding-smartphonwith-the-delivery-man-template-for-banner-web-landing-page-social-media-flat-design-concept-vector.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://images.all-free-download.com/images/graphiclarge/ecommerce_website_banner_template_customers_sketch_flat_design_6920122.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://images.all-free-download.com/images/thumbjpg/ecommerce_website_banner_template_shoppers_sketch_6920121.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://kchinnadurai.in/images/ecombanner.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://www.nicepng.com/png/detail/830-8304192_ecommerce-development-bottom-banner-ecommerce-banner-png.png"
                                alt="Banner Slide" className='w-full' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;
