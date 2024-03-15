import galleyImg1 from "../../assets/gallery01.jpg";
import galleyImg2 from "../../assets/gallery02.jpg";
import galleyImg3 from "../../assets/gallery03.jpg";
import galleyImg4 from "../../assets/gallery04.jpg";
import galleyImg5 from "../../assets/gallery05.jpg";
import galleyImg6 from "../../assets/gallery06.jpg";
import galleyImg7 from "../../assets/gallery07.jpg";
import galleyImg8 from "../../assets/gallery08.jpg";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import AnimatedUnderline from "../layout/AnimatedUnderline";

const Gallery = () => {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <div className="py-20  bg-slate-100 dark:bg-zinc-950">
      <div className="text-center mb-20">
        <h4 className="text-secondary text-lg font-semibold mb-3">
          OUR PHOTO GALLERY
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2">
          Photos of Donations and Humanitarian Works
        </h2>
        <AnimatedUnderline className="mx-auto" />
      </div>
      <motion.div
        ref={view}
        animate={
          inView
            ? { opacity: 1, y: 0, transition: { duration: 1 } }
            : { opacity: 0, y: 150, transition: { duration: 1 } }
        }
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper w-[95%] text-white"
        >
          <SwiperSlide className="mb-20">
            <img src={galleyImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="mb-20">
            <img src={galleyImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="mb-20">
            <img src={galleyImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="mb-20">
            <img src={galleyImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="mb-20">
            <img src={galleyImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="mb-20">
            {" "}
            <img src={galleyImg6} alt="" />
          </SwiperSlide>
          <SwiperSlide className="mb-20">
            <img src={galleyImg7} alt="" />
          </SwiperSlide>
          <SwiperSlide className="mb-20">
            <img src={galleyImg8} alt="" />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Gallery;
