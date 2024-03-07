import { motion } from "framer-motion";

const AnimatedUnderline = ({ className = "" }) => {
  return (
    <div>
      <motion.p
        className={`w-28 h-2 rounded-xl bg-secondary ${className}`}
        initial={{ x: 0 }}
        animate={{ x: 10 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.p>
    </div>
  );
};

export default AnimatedUnderline;
