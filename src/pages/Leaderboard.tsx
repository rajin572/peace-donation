import AnimatedUnderline from "@/components/layout/AnimatedUnderline";
import Container from "@/components/ui/Container";
import Spninner from "@/components/ui/Spninner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetDonorQuery } from "@/redux/features/donor/donorApi";
import { useAppSelector } from "@/redux/hooks";
import { TDonorData } from "@/types";
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
  const { data: donorData, isFetching } = useGetDonorQuery(undefined);
  const { darkMode } = useAppSelector((store) => store.theme);
  const sortedDonorData = donorData?.data
    ?.slice()
    .sort(
      (b: { amount: number }, a: { amount: number }) => a.amount - b.amount
    );

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
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
            <Table>
              <TableCaption>All Donor Data </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>N0.</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedDonorData.map((donation: TDonorData, index: number) => (
                  <TableRow key={donation._id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      <img
                        src={donation.image}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />
                    </TableCell>
                    <TableCell>{donation.name}</TableCell>
                    <TableCell>{donation.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Leaderboard;
