import { Link } from "react-router-dom";
import { Button } from "./button";
import { TDonationCard } from "@/types";
import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/ScrollGrowHook";
import { HeartHandshake } from "lucide-react";

const DonationCard = ({ donation }: { donation: TDonationCard }) => {
  const { style, componentRef } = useScrollGrow();
  const { _id, amount, category, image, title } = donation;
  return (
    <motion.div
      className="w-[250px] sm:w-80 bg-white dark:bg-zinc-950 rounded-md shadow-md dark:shadow-zinc-900 overflow-hidden"
      style={style}
      ref={componentRef}
    >
      <div className="h-60 overflow-hidden">
        <img
          className="w-full hover:scale-105 duration-500 h-60"
          src={image}
          alt=""
        />
      </div>
      <div className=" flex justify-between flex-col h-44 p-3">
        <div className="">
          <h3 className="text text-primary dark:text-white font-bold mb-2">
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <h4 className="text-sm text-slate-700 dark:text-slate-300">
              {category}
            </h4>
            <p className="italic text-secondary font-semibold">
              <span className=" text-primary dark:text-secondary">$</span>
              {amount}
            </p>
          </div>
        </div>
        <div className="mt-5 text-center w-full">
          <div className="">
            <Link to={`/donations/${_id}`}>
              {" "}
              <Button className="w-full bg-primary dark:bg-secondary duration-500 rounded-e flex justify-center items-center gap-2 ">
                Donate Now
                <HeartHandshake />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationCard;
