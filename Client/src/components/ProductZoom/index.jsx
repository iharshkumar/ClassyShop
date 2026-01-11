import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";


export const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    const handleSlideChange = (swiper) => {
        const activeIndex = swiper.activeIndex;
        setSlideIndex(activeIndex);
        if (zoomSliderSml.current && zoomSliderSml.current.swiper) {
            zoomSliderSml.current.swiper.slideTo(activeIndex);
        }
    }

    return (
        <>
            <div className='flex gap-3'>
                <div className="slider w-[15%]">
                    <Swiper
                        ref={zoomSliderSml}
                        direction={'vertical'}
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        className="zoomProductSliderThumbs !h-[440px] !overflow-hidden"

                    >
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group transition-all ${slideIndex === 0 ? 'opacity-100 !border-2 !border-[#ff5252] !shadow-md' : 'opacity-30 !border-2 !border-transparent'}`} onClick={() => goto(0)}>
                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_1.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                                {slideIndex === 0 && <div className='absolute inset-0 !bg-[#ff5252] opacity-20 rounded-md'></div>}
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group transition-all ${slideIndex === 1 ? 'opacity-100 !border-2 !border-[#ff5252] !shadow-md' : 'opacity-30 !border-2 !border-transparent'}`} onClick={() => goto(1)}>
                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_2.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group transition-all ${slideIndex === 2 ? 'opacity-100 !border-2 !border-[#ff5252] !shadow-md' : 'opacity-30 !border-2 !border-transparent'}`} onClick={() => goto(2)}>
                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_3.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group transition-all ${slideIndex === 3 ? 'opacity-100 !border-2 !border-[#ff5252] !shadow-md' : 'opacity-30 !border-2 !border-transparent'}`} onClick={() => goto(3)}>
                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_4.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group transition-all ${slideIndex === 4 ? 'opacity-100 !border-2 !border-[#ff5252] !shadow-md' : 'opacity-30 !border-2 !border-transparent'}`} onClick={() => goto(4)}>
                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_5.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group transition-all ${slideIndex === 5 ? 'opacity-100 !border-2 !border-[#ff5252] !shadow-md' : 'opacity-30 !border-2 !border-transparent'}`} onClick={() => goto(5)}>
                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_6.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group transition-all ${slideIndex === 6 ? 'opacity-100 !border-2 !border-[#ff5252] !shadow-md' : 'opacity-30 !border-2 !border-transparent'}`} onClick={() => goto(6)}>
                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_7.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='zoomContainer w-[80%] !h-[450px] overflow-hidden !rounded-md'>
                    <Swiper
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                        onSlideChange={handleSlideChange}
                    >
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_1.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_2.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_3.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_4.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_5.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_6.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63be811GQAZMI00000629_7.jpg'} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
