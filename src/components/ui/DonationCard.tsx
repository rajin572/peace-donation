import { Link } from "react-router-dom";
import { Button } from "./button";
import { TDonationCard } from "@/types";
import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/ScrollGrowHook";

const DonationCard = ({ donation }: { donation: TDonationCard }) => {
  const { style, componentRef } = useScrollGrow();
  const { _id, amount, category, image, title } = donation;
  return (
    <motion.div
      className="w-[250px] sm:min-w-80 lg:min-w-full bg-white dark:bg-zinc-950 rounded-md shadow-md dark:shadow-zinc-900 overflow-hidden"
      style={style}
      ref={componentRef}
    >
      <img
        className="w-full hover:scale-105 duration-500 h-60"
        src={image}
        alt=""
      />
      <div className="p-5 flex justify-between flex-col h-52">
        <div>
          <h3 className="text-lg text-primary dark:text-white font-bold">
            {title}
          </h3>
          <h4 className="text-slate-700 dark:text-slate-300">{category}</h4>
          <p className="italic text-secondary font-semibold">
            <span className=" text-primary dark:text-secondary">$</span>
            {amount}
          </p>
        </div>
        <div className="mt-5 text-center w-full">
          <Link to={`/donations/${_id}`}>
            {" "}
            <Button className="w-full bg-primary dark:bg-secondary duration-500">
              View Detail
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationCard;
