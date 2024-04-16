import { Link } from "react-router-dom";

const RecentDonationCard = ({
  image,
  title,
  category,
  amount,
  _id,
}: {
  image: string;
  title: string;
  category: string;
  amount: number;
  _id: string;
}) => {
  return (
    <div className="flex items-center lg:items-start gap-2 mb-5 border-b border-secondary p-1">
      <img className="h-20 w-16" src={image} alt="" />
      <div>
        <Link to={`/donations/${_id}`}>
          <h4 className="text-slate-700 dark:text-slate-400 lg:text-sm dark:hover:text-secondary hover:text-secondary font-bold">
            {title}
          </h4>
        </Link>

        <h4 className="text-xs ">{category}</h4>
        <h4 className="text-secondary dark:text-slate-400 text-sm lg:text-xs font-bold">
          <span className="text-primary dark:text-secondary">$</span>
          {amount}
        </h4>
      </div>
    </div>
  );
};

export default RecentDonationCard;
