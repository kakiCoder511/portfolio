import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './HobbiesSlider.css';

const images = [
    "/Projects/hobbies/H.JPG",
    "/Projects/hobbies/H1.JPG",

  "/Projects/hobbies/5C9C9E04-488B-4D47-A974-4D2A4D4ABDDA.JPG",
  "/Projects/hobbies/57C0E4C0-3440-4E6B-B521-20097106D455.JPG",
  "/Projects/hobbies/300BA144-201D-4263-BC16-8D9D51003FC4.JPG",
  "/Projects/hobbies/00390006.jpg",
  "/Projects/hobbies/01440002.jpg",
  "/Projects/hobbies/01440008.jpg",
  "/Projects/hobbies/01440013.jpg",
  "/Projects/hobbies/01440018.jpg",
  "/Projects/hobbies/01440027.jpg",
  "/Projects/hobbies/07270032.JPG",
  "/Projects/hobbies/AB73B240-C683-4E4C-B0A8-6F4681DA6817.JPG",
  "/Projects/hobbies/AEDFAC73-16B7-4ED7-B5F6-EA72F5BD7DCC.JPG",
  "/Projects/hobbies/CD223666-BFFA-42B1-BCEF-4F6507BB446D.jpg"
];


export default function HobbiesSlider() {
  return (
    <div className="hobbies-section">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{
          el: '.swiper-scrollbar',
          draggable: true,
          dragSize: 'auto',
          hide: false,
          snapOnRelease: true
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`hobby-${i}`} className="slider-image" />
          </SwiperSlide>
        ))}
        {/* Scrollbar container */}
        <div className="swiper-scrollbar"></div>
      </Swiper>
      <p className="swipe-tip">← Swipe to see more →</p>
    </div>
  );
}