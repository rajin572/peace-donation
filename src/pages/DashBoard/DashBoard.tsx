import Spninner from "@/components/ui/Spninner";
import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import { TDonationDetail } from "@/types";
import { motion } from "framer-motion";
import { Chart } from "react-google-charts";

const DashBoard = () => {
  const { data: donationData, isFetching } = useGetDonationsQuery(undefined);

  const categoryAmounts = donationData?.data?.reduce(
    (
      accumulator: { [category: string]: number },
      donation: TDonationDetail
    ) => {
      const { category, amount } = donation;
      accumulator[category] = (accumulator[category] || 0) + amount;
      return accumulator;
    },
    {} as { [category: string]: number }
  );

  if (categoryAmounts) {
    const data = Object.entries(categoryAmounts).map(([category, amount]) => [
      category,
      amount,
    ]);

    data.unshift(["Category", "Amount"]);

    const options = {
      title: "Donation Activities",
    };

    if (isFetching) {
      return (
        <div className="h-screen">
          <Spninner />
        </div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </motion.div>
    );
  }
};

export default DashBoard;
