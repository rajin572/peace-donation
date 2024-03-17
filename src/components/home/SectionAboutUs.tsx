import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../../assets/about.jpg";
import AnimatedUnderline from "../layout/AnimatedUnderline";

const SectionAboutUs = () => {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);

  const aboutImage = {
    initial: { y: 0, scale: 5 },
    animate: {
      y: 15,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className=" bg-slate-100 dark:bg-zinc-950">
      <motion.div
        ref={view}
        className="py-20 overflow-hidden"
        animate={
          inView
            ? { opacity: 1, y: 0, transition: { duration: 1 } }
            : { opacity: 0, y: -200, transition: { duration: 1 } }
        }
      >
        <div className="text-center mb-20">
          <h4 className="text-secondary text-lg font-semibold mb-3">
            About Us
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold mb-2">
            We Work For People
          </h2>
          <AnimatedUnderline className="mx-auto" />
        </div>
        <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center-between items-center gap-5 lg:gap-20">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-5">About Us</h1>
            {/* <AnimatedUnderline /> */}
            <p className="text-slate-700 dark:text-slate-400">
              Our story is one of passion, perseverance, and unwavering
              commitment to our values. From humble beginnings, we have grown
              into a thriving community of like-minded individuals, volunteers,
              and supporters, united by a shared vision of a better tomorrow.
              <br />
              Driven by empathy and a deep-seated desire to alleviate suffering,
              we have embarked on a wide range of initiatives aimed at
              addressing some of the most pressing challenges facing our society
              today. Whether it's providing essential resources to those in
              need, advocating for social justice and equality, or promoting
              environmental sustainability, we strive to tackle every issue with
              compassion, integrity, and innovation.
            </p>
          </div>
          <motion.div variants={aboutImage} initial="initial" animate="animate">
            <img className="w-full max-h-96" src={aboutImg} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionAboutUs;
