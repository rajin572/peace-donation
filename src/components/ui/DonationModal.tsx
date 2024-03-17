/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useImageUpload from "@/hooks/useImageUpload";
import { usePostDonorMutation } from "@/redux/features/donor/donorApi";
import { TDonationDetail } from "@/types";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DonationModal = ({
  donation,
  user,
}: {
  donation: TDonationDetail;
  user: {
    name: string;
    email: string;
  } | null;
}) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [postDonor] = usePostDonorMutation();
  const { uploadImage } = useImageUpload();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please Wait! Donation added....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);
      if (user) {
        const donorData = {
          name: user?.name,
          email: user?.email,
          amount: Number(data.amount),
          image: imageUrl?.data?.url,
        };

        await postDonor(donorData);

        toast.success("Donated Successfully", {
          id: toastId,
          duration: 1000,
        });
        navigate(`/dashboard`);
      } else {
        navigate(`/dashboard`);
        throw new Error("You Must Login First");
      }
    } catch (error: any) {
      toast.error(`${error}`, {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] dark:bg-secondary transition-all duration-500">
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate On {donation.title}</DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <img className="h-40 w-full" src={donation.image} alt="" />
            <div className="text-primary mt-2 flex justify-between items-center">
              <div>
                <span className="text-secondary">Category : </span>
                {donation.category}
              </div>
              <div>
                <span className="text-secondary">Amount : </span>
                {`$${donation.amount}`}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <DialogTitle className="mb-2">User Info : </DialogTitle>
            <h2 className=" text-primary text-sm">
              <span className="text-secondary font-semibold">
                Your Email :{" "}
              </span>
              {user?.email}
            </h2>
            <h2 className=" text-primary text-sm">
              <span className="text-secondary font-semibold">Your Name : </span>
              {user?.name}
            </h2>
            <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="flex items-center text-primary dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dollar-sign text-secondary"
                  >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span> Image Link :</span>
                </label>
                <input
                  type="file"
                  {...register("image")}
                  name="image"
                  placeholder="Enter Your Image Link"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center text-primary dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dollar-sign text-secondary"
                  >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span> Amount :</span>
                </label>
                <input
                  type="number"
                  {...register("amount")}
                  name="amount"
                  placeholder="Enter Your Amount"
                  required
                  max={donation.amount}
                  className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-1 rounded"
                />
              </div>
              <div>
                <button className="w-full border-2 border-primary bg-primary text-white font-bold py-2 rounded dark:bg-secondary dark:border-secondary duration-500 transition-all  flex justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-round-plus"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  <span>Donate</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
