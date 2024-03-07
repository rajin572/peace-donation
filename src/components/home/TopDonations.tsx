import { Link } from "react-router-dom";
import DonationCard from "../ui/DonationCard";
import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import { TDonationCard } from "@/types";
import Spninner from "../ui/Spninner";
import AnimatedUnderline from "../layout/AnimatedUnderline";

const TopDonations = () => {
  const { data: donationData, isFetching } = useGetDonationsQuery(undefined);

  if (isFetching) {
    return (
      <div className="h-96">
        <Spninner />
      </div>
    );
  }
  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-20">
        <h4 className="text-secondary text-lg font-semibold mb-3">
          HELP US TO REACH
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-2">
          Support Our Cause
        </h2>
        <AnimatedUnderline className="mx-auto" />
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 mx-auto">
        {donationData?.data?.slice(0, 6).map((donation: TDonationCard) => (
          <DonationCard key={donation._id} donation={donation}></DonationCard>
        ))}
      </div>
      <div className="mt-28 text-center">
        <Link
          className="text-xl text-primary underline font-bold"
          to="/donations"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default TopDonations;
