import DonationSinglePost from "@/components/Donation/DonationSinglePost";
import Container from "@/components/ui/Container";
import Spninner from "@/components/ui/Spninner";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useGetDonationsQuery,
  useGetSingleDonationQuery,
} from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import { TDonationCard } from "@/types";
import RecentDonationCard from "@/components/Donation/RecentDonationCard";

const DonationDetails = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const user = useAppSelector(selectCurrentUser);

  const { id } = useParams();
  const { data: donation, isFetching } = useGetSingleDonationQuery(id);

  const { data: donationData } = useGetDonationsQuery(undefined);

  const sortedDonationData = donationData?.data
    ?.slice()
    .sort(
      (b: { amount: number }, a: { amount: number }) => a.amount - b.amount
    );

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <div className="mx-auto">
        <Container>
          <div className="py-20 mx-auto grid grid-cols-1 lg:grid-cols-12 justify-items-center items-start gap-10">
            <div className="lg:col-span-9">
              <DonationSinglePost donation={donation?.data} user={user} />
            </div>
            <div className="lg:col-span-3 w-full">
              <h1 className="text-xl md:text-2xl text-primary dark:text-white font-bold">
                Recent Posts
              </h1>
              <p className="w-28 h-1 rounded-xl bg-secondary mb-4"></p>
              {sortedDonationData
                ?.slice(0, 8)
                ?.map((donation: TDonationCard) => (
                  <RecentDonationCard
                    key={donation._id}
                    image={donation.image}
                    title={donation.title}
                    category={donation.category}
                    amount={donation.amount}
                    _id={donation._id}
                  />
                ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DonationDetails;
