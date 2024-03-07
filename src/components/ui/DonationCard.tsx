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
      className="w-[250px] sm:min-w-80 lg:min-w-full bg-white rounded-md shadow-md overflow-hidden"
      style={style}
      ref={componentRef}
    >
      <img
        className="w-full border hover:scale-105 duration-500 h-60"
        src={image}
        alt=""
      />
      <div className="p-5 flex justify-between flex-col h-52">
        <div>
          <h3 className="text-lg text-primary font-bold mb-2">{title}</h3>
          <h4 className="text-slate-500">{category}</h4>
          <p className="italic text-secondary font-semibold">
            <span className="text-primary">$</span>
            {amount}
          </p>
        </div>
        <div className="mt-5 text-center w-full">
          <Link to={`/donations/${_id}`}>
            {" "}
            <Button className="w-full bg-primary hover:bg-secondary duration-500">
              View Detail
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationCard;
