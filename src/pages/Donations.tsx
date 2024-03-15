import AnimatedUnderline from "@/components/layout/AnimatedUnderline";
import Container from "@/components/ui/Container";
import DonationCard from "@/components/ui/DonationCard";
import Spninner from "@/components/ui/Spninner";
import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import { motion } from "framer-motion";
import { TDonationCard } from "@/types";
import { useAppSelector } from "@/redux/hooks";
import ScrollToTop from "@/hooks/ScrollToTop";

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

const Donations = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { data: donationData, isFetching } = useGetDonationsQuery(undefined);

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <Container>
        <div className="py-20 overflow-hidden">
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
              All Donation Posts
            </motion.h4>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2"
              variants={introChildren}
            >
              Support Our Cause
            </motion.h2>
            <motion.div variants={introChildren}>
              <AnimatedUnderline className="mx-auto" />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-10 mx-auto"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {donationData?.data?.map((donation: TDonationCard) => (
              <DonationCard
                key={donation._id}
                donation={donation}
              ></DonationCard>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Donations;
