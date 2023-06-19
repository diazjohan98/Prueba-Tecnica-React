import React from 'react'
import './siderStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from 'swiper';



import 'swiper/swiper-bundle.min.css';
import slide1 from '../../assets/slidesIMG/slide1.jpg'
import slide2 from '../../assets/slidesIMG/slide2.jpg'
import slide3 from '../../assets/slidesIMG/slide3.jpg'
import slide4 from '../../assets/slidesIMG/slide4.jpg'

const Carousel = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
    effect="flip"
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={slide1} alt="" style={{width: "644px"}} className='imgCarouselStyle' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" style={{width: "635px"}} className='imgCarouselStyle' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" style={{width: "635px"}} className='imgCarouselStyle' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" style={{width: "635px"}} className='imgCarouselStyle' />
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel

