interface StatCardProps {
  title: string;
  amount: string;
  percentage: string;
  increase: boolean;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  amount,
  percentage,
  increase,
  description,
}) => {
  return (
    <div className="p-4 bg-white dark:bg-[#0F172A] shadow-md rounded-lg text-center">
      <h3 className="text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {amount}
      </p>
      <p
        className={`text-sm ${
          increase ? "text-green-500" : "text-red-500"
        } font-semibold`}
      >
        {increase ? `+${percentage}` : `-${percentage}`}%
      </p>
      <p className="text-gray-400 text-xs">{description}</p>
    </div>
  );
};

export default StatCard;
