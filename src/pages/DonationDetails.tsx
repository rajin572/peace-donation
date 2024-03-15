import DonationModal from "@/components/ui/DonationModal";
import Spninner from "@/components/ui/Spninner";
import ScrollToTop from "@/hooks/ScrollToTop";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonationQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
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
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <div className="py-20 w-[95%] mx-auto">
        <div className="w-[95%] lg:w-full mx-auto">
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
              src={donation?.data?.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl text-primary dark:text-white font-bold mt-10 mb-4">
              {donation?.data?.title}
            </h1>
            <h3 className="md:text-lg font-semibold text-secondary mb-2">
              <span className="text-primary dark:text-white">Category : </span>
              {donation?.data?.category}
            </h3>
            <h4 className="md:text-lg font-semibold text-secondary mb-10">
              {" "}
              <span className="text-primary dark:text-white">Amount : </span>
              {`$${donation?.data?.amount}`}
            </h4>
            <div className="text-slate-700 dark:text-slate-400">
              <p className="text-lg md:text-xl text-primary font-semibold mb-2 dark:text-white">
                Description :
              </p>
              <p>{donation?.data?.description}</p>
            </div>
          </div>
          <div className="mt-10 text-end">
            <DonationModal donation={donation?.data} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
