import DonationModal from "@/components/ui/DonationModal";
import Spninner from "@/components/ui/Spninner";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonationQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const user = useAppSelector(selectCurrentUser);

  const { id } = useParams();
  const { data: donation, isFetching } = useGetSingleDonationQuery(id);

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <div className="py-20 bg-white">
      <div className="w-[90%] lg:w-full mx-auto">
        <div>
          <img
            className="w-full h-[200px] md:h-[300px] lg:h-[400px]"
            src={donation?.data?.image}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl text-primary font-bold mt-10 mb-4">
            {donation?.data?.title}
          </h1>
          <h3 className="md:text-lg font-semibold text-secondary mb-2">
            <span className="text-primary">Category : </span>
            {donation?.data?.category}
          </h3>
          <h4 className="md:text-lg font-semibold text-secondary mb-10">
            {" "}
            <span className="text-primary">Amount : </span>
            {`$${donation?.data?.amount}`}
          </h4>
          <div className="text-slate-600">
            <p className="text-lg md:text-xl text-primary font-semibold mb-2">
              Description :
            </p>
            <p>{donation?.data?.description}</p>
          </div>
        </div>
        <div className="mt-10 text-end">
          <DonationModal donation={donation?.data} user={user?.email} />
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
