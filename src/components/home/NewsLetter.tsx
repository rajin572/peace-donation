import { useRef } from "react";
import AnimatedUnderline from "../layout/AnimatedUnderline";
import { useInView, motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const NewsLetter = () => {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <div className="py-20">
      <div className="text-center mb-20">
        <h4 className="text-secondary text-lg font-semibold mb-3">
          Newslatter
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2">
          Get Upto Date
        </h2>
        <AnimatedUnderline className="mx-auto" />
      </div>
      <motion.div
        className="pb-20 flex justify-center items-center text-center flex-col"
        ref={view}
        variants={intro}
        initial="hidden"
        animate={inView ? "visible" : ""}
      >
        <motion.h2
          className="text-primary dark:text-white text-2xl font-bold mb-5"
          variants={introChildren}
        >
          Stay Connected with Us! <br /> Subscribe to Our Newsletter
        </motion.h2>
        <motion.p
          className=" w-[95%] sm:w-[80%] md:w-[60%] text-slate-700 dark:text-slate-400"
          variants={introChildren}
        >
          Subscribe to our newsletter to stay updated on our latest initiatives,
          success stories, and upcoming events. Be the first to know about how
          your support is making a difference in the lives of those in need.
          Join our community and together, let's create positive change!
        </motion.p>
        <motion.div
          className="mt-10 w-full flex justify-center items-center"
          variants={introChildren}
        >
          <input
            className="w-[70%] sm:w-[500px] py-2 px-2 md:py-3 md:px-5  outline-none border-none shadow-md rounded-lg text-black"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="py-2 px-2 md:py-3 md:px-5 ms-[-50px] md:ms-[-110px] outline-none bg-primary dark:bg-secondary text-white dark:text-primary rounded-e-lg">
            <span className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send text-secondary dark:text-primary"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              Subscribe
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
