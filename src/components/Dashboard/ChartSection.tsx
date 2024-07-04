import Chart from "react-google-charts";

import { TDonationDetail, TDonorData } from "@/types";
import { useAppSelector } from "@/redux/hooks";
import { useGetDonorQuery } from "@/redux/features/donor/donorApi";
import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import Spninner from "../ui/Spninner";

const ChartSection = () => {
  const { darkMode } = useAppSelector((store) => store.theme);

  //* Donation Data
  const { data: donationData, isFetching: donationFetching } =
    useGetDonationsQuery(undefined);

  //* Donor Data
  const { data: donorData, isFetching } = useGetDonorQuery(undefined, {
    skip: donationFetching,
  });

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
      title: "Donation Posts Chart",
    };
    const donationData: (string | number | { role: string })[][] = [
      ["Element", "Donor Chart", { role: "style" }],
    ];

    if (donorData) {
      donorData.data.forEach((donor: TDonorData) => {
        if (donor.name && donor.amount) {
          donationData.push([donor.name, donor.amount, "#FC601D"]);
        }
      });
    }
    if (isFetching) {
      return (
        <div className="h-screen">
          <Spninner />
        </div>
      );
    }

    return (
      <div className={` w-full ${darkMode ? "dark" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
          <div className="w-full">
            <Chart
              chartType="PieChart"
              data={data}
              options={{
                ...options,
                backgroundColor: `${darkMode ? "rgb(0, 0, 0)" : "#fff"}`,
              }}
              height={"400px"}
              className="dark:text-white"
            />
          </div>
          <div className="w-full">
            <Chart
              chartType="ColumnChart"
              height="400px"
              options={{
                backgroundColor: `${darkMode ? "rgb(0, 0, 0)" : "#fff"}`,
              }}
              data={donationData}
              className="dark:text-white"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default ChartSection;
