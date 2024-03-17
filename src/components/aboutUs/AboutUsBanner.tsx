import backgroundImage from "../../assets/aboutBanner.webp";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 1.5,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const AboutUsBanner = () => {
  return (
    <motion.div
      className=" bg-center bg-no-repeat bg-cover py-12 flex justify-center items-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.div
        className=" mx-auto  flex justify-center items-center text-center flex-col"
        variants={intro}
        initial="hidden"
        animate="visible"
      >
        <motion.h4
          className="text-secondary text-lg md:text-xl lg:text-2xl  font-bold mb-3"
          variants={introChildren}
        >
          We are <span className="font-bold">Peace</span>
        </motion.h4>
        <motion.h2
          className="text-xl md:text-xxl lg:text-2xl text-white font-bold mb-3"
          variants={introChildren}
        >
          Making the world a better place
        </motion.h2>
        <motion.p className="text-white mb-10" variants={introChildren}>
          Transform lives with your donation. Join us in creating change.
          <br />
          Every contribution matters.
        </motion.p>
        <motion.div variants={introChildren}></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUsBanner;
