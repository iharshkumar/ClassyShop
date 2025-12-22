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
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
                                <img src="https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                                <img src="https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                                <img src="https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
                                <img src="https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item !rounded-md !overflow-hidden cursor-pointer group ${slideIndex === 4 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(4)}>
                                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        </SwiperSlide>


                    </Swiper>
                </div>

                <div className='zoomContainer w-[80%] !h-[450px] overflow-hidden !rounded-md'>
                    <Swiper
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                    >
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={'https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg'} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
