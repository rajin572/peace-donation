import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import backgroundImage from "../../assets/testimonial-bg.png";
import TestimonialCard from "../ui/TestimonialCard";
import { TDonorTestimonial } from "@/types";
import AnimatedUnderline from "../layout/AnimatedUnderline";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useGetTestimonialQuery } from "@/redux/features/tesimonial/testimonial";

const Testimonials = () => {
  const { data: testimonialData } = useGetTestimonialQuery(undefined);
  const sortedTestimonialData = testimonialData?.data
    ?.slice()
    .sort(
      (b: { amount: number }, a: { amount: number }) => a.amount - b.amount
    );

  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
        backgroundSize: "cover",
      }}
      className="pb-20 bg-primary pt-20"
    >
      <div className="text-center mb-20">
        <h4 className="text-secondary text-lg font-semibold mb-3">
          Testimonial
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2">
          Our Top 6 Donor
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
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper w-[95%] text-white"
        >
          {sortedTestimonialData
            ?.slice(0, 6)
            .map((donor: TDonorTestimonial) => (
              <SwiperSlide className="mb-20" key={donor._id}>
                <TestimonialCard donor={donor}></TestimonialCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Testimonials;
