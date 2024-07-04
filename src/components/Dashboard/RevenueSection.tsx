import { useAppSelector } from "@/redux/hooks";
import { Chart } from "react-google-charts";

const RevenueSection = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const grossVolume = "$48,580";
  const netVolume = "$24,920";
  const grossIncrease = "4.81";
  const netIncrease = "2.32";

  const data = [
    ["Date", "Gross Volume", "Net Volume"],
    ["10 Apr", 50000, 15000],
    ["26 May", 72000, 26000],
    ["8 Jun", 63000, 16500],
    ["22 Jul", 84000, 37000],
    ["16 Aug", 95000, 47500],
    ["19 Sept", 48000, 9000],
    ["5 Oct", 80000, 30000],
    ["13 Nov", 72000, 21000],
    ["25 Dec", 91000, 40500],
  ];

  const options = {
    title: "Revenue",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      title: "Date",
    },
    vAxis: {
      title: "Revenue",
    },
    series: {
      0: { color: "#0F172A" },
      1: { color: "#FC601D" },
    },
  };

  return (
    <div className="p-8 bg-white dark:bg-[#000000] shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Revenue
      </h2>
      <div className="flex justify-between items-center my-4">
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {grossVolume}
          </p>
          <p className="text-sm text-green-500">+{grossIncrease}% last year</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gross Volume
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {netVolume}
          </p>
          <p className="text-sm text-green-500">+{netIncrease}% last year</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Net Volume</p>
        </div>
      </div>
      <div className="my-4">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={{
            ...options,
            backgroundColor: `${darkMode ? "rgb(0, 0, 0)" : "#fff"}`,
          }}
        />
      </div>
    </div>
  );
};

export default RevenueSection;
