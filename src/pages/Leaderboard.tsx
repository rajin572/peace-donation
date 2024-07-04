import AnimatedUnderline from "@/components/layout/AnimatedUnderline";
import Container from "@/components/ui/Container";
import LeaderboardTable from "@/components/ui/LeaderboardTable";
import { useAppSelector } from "@/redux/hooks";

import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const Leaderboard = () => {
  const { darkMode } = useAppSelector((store) => store.theme);

  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <div className="my-20">
        <Container>
          <motion.div
            className="text-center mb-20"
            variants={intro}
            initial="hidden"
            animate="visible"
          >
            <motion.h4
              className="text-secondary text-lg font-semibold mb-3"
              variants={introChildren}
            >
              Our All Donors
            </motion.h4>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2 "
              variants={introChildren}
            >
              Leader Board
            </motion.h2>
            <motion.div variants={introChildren}>
              <AnimatedUnderline className="mx-auto" />
            </motion.div>
          </motion.div>
          <motion.div
            className=" mx-auto"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <LeaderboardTable />
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Leaderboard;
