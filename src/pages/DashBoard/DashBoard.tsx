import Container from "@/components/ui/Container";
import StatCard from "@/components/Dashboard/StateCard";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import RevenueSection from "@/components/Dashboard/RevenueSection";
import Leaderboard from "../Leaderboard";
import ChartSection from "@/components/Dashboard/ChartSection";

const statCardsData = [
  {
    title: "Total Donation",
    amount: "$1,139,240.25",
    percentage: "3.4",
    increase: true,
    description: "From last month",
  },
  {
    title: "Avg Donation",
    amount: "$231.20",
    percentage: "1.02",
    increase: true,
    description: "From last month",
  },
  {
    title: "Total Revenue",
    amount: "$500,420.25",
    percentage: "2.15",
    increase: true,
    description: "From last month",
  },
  {
    title: "Total Visitors",
    amount: "400.000",
    percentage: "2.25",
    increase: false,
    description: "From last month",
  },
];

const DashBoard = () => {
  const { darkMode } = useAppSelector((store) => store.theme);

  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20"
      >
        <Container>
          <h1 className="mb-5 text-3xl font-bold">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 mt-10">
            {statCardsData.map((card, index) => (
              <StatCard
                key={index}
                title={card.title}
                amount={card.amount}
                percentage={card.percentage}
                increase={card.increase}
                description={card.description}
              />
            ))}
          </div>
          <ChartSection />
          <RevenueSection />
          <Leaderboard />
        </Container>
      </motion.div>
    </div>
  );
};

export default DashBoard;
