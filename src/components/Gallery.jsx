import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="bg-black py-5">
        <div className="container">
          <h1 className="text-white text-center py-4">Photo Gallery</h1>
          <div>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 mb-4"
            >
              <SwiperSlide className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded-3" src="./gallery/1.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded-3" src="./gallery/2.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded-3" src="./gallery/3.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded-3" src="./gallery/4.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded-3" src="./gallery/5.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded-3" src="./gallery/6.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded-3" src="./gallery/7.webp" alt="Gallery Images" />
              </SwiperSlide>

            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 8,
                  spaceBetween: 10,
                }}}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper pb-4"
            >
              <SwiperSlide>
                <img className="img-fluid" src="./gallery/1.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="./gallery/2.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="./gallery/3.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="./gallery/4.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="./gallery/5.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="./gallery/6.webp" alt="Gallery Images" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="./gallery/7.webp" alt="Gallery Images" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section >
    </>
  )
}

export default Gallery