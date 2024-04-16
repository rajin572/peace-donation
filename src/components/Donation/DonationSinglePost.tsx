import { TDonationDetail } from "@/types";
import DonationModal from "../ui/DonationModal";

const DonationSinglePost = ({
  donation,
  user,
}: {
  donation: TDonationDetail;
  user: {
    name: string;
    email: string;
  } | null;
}) => {
  return (
    <div className=" lg:w-full mx-auto">
      <div>
        <img
          className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
          src={donation?.image}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl text-primary dark:text-white font-bold mt-10 mb-4">
          {donation?.title}
        </h1>
        <h3 className="md:text-lg font-semibold text-secondary mb-2">
          <span className="text-primary dark:text-white">Category : </span>
          {donation?.category}
        </h3>
        <h4 className="md:text-lg font-semibold text-secondary mb-10">
          {" "}
          <span className="text-primary dark:text-white">Amount : </span>
          {`$${donation?.amount}`}
        </h4>
        <div className="text-slate-700 dark:text-slate-400">
          <p className="text-lg md:text-xl text-primary font-semibold mb-2 dark:text-white">
            Description :
          </p>
          <p>{donation?.description}</p>
        </div>
      </div>
      <div className="mt-10 text-end">
        <DonationModal donation={donation} user={user} />
      </div>
    </div>
  );
};

export default DonationSinglePost;
