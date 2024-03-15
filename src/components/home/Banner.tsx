import { Link } from "react-router-dom";
import backgroundImage from "../../assets/bannerImg.jpg";
import { Button } from "../ui/button";
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

const Banner = () => {
  return (
    <motion.div
      className=" bg-center bg-no-repeat bg-cover py-12  h-screen  flex justify-center items-center text-center"
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
          className="text-secondary text-lg md:text-xl lg:text-2xl font-semibold mb-6"
          variants={introChildren}
        >
          Make a Difference Today!
        </motion.h4>
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6"
          variants={introChildren}
        >
          Let's Help Those Who Are More In Need
        </motion.h2>
        <motion.p className="text-white mb-10" variants={introChildren}>
          Transform lives with your donation. Join us in creating change.
          <br />
          Every contribution matters. Donate now.
        </motion.p>
        <motion.div variants={introChildren}>
          <Link to="/donations">
            <Button className="bg-secondary text-white ">Donate Now</Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
