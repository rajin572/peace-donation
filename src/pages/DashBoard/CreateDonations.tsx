import { usePostDonationMutation } from "@/redux/features/donation/donationApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";
import ScrollToTop from "@/hooks/ScrollToTop";
import useImageUpload from "@/hooks/useImageUpload";

const CreateDonations = () => {
  const [postDonation] = usePostDonationMutation();

  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImageUpload();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating post....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);

      const donationData = {
        image: imageUrl?.data?.url,
        title: data.title,
        amount: Number(data.amount),
        category: data.category,
        description: data.description,
      };

      postDonation(donationData).unwrap();

      toast.success("Donation Post Created Successfully", {
        id: toastId,
        duration: 1000,
      });
      reset();
    } catch (err) {
      toast.error("Something Want Wrong", {
        id: toastId,
        duration: 1000,
      });
    }
  };
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <motion.div
        className="py-10 dark:text-black"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <form
          className="md:grid md:grid-cols-2 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
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
                className="lucide lucide-image text-secondary"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <span> Image Link :</span>
            </label>
            <input
              type="file"
              {...register("image")}
              name="image"
              placeholder="Enter Your Image Link"
              required
              className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded  text-black dark:text-white"
            />
          </div>
          <div className="mb-5">
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
                className="lucide lucide-list-collapse text-secondary"
              >
                <path d="m3 10 2.5-2.5L3 5" />
                <path d="m3 19 2.5-2.5L3 14" />
                <path d="M10 6h11" />
                <path d="M10 12h11" />
                <path d="M10 18h11" />
              </svg>
              <span> Category :</span>
            </label>
            <select
              className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
              {...register("category")}
              name="category"
            >
              <option label="Select Category" />
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Shelter">Shelter</option>
              <option value="Medical Supply">Medical Supply</option>
              <option value="Relief Goods">Relief Goods</option>
            </select>
          </div>
          <div className="mb-5">
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
                className="lucide lucide-captions text-secondary"
              >
                <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
              </svg>
              <span> Title :</span>
            </label>
            <input
              type="text"
              {...register("title")}
              name="title"
              placeholder="Enter Your Title"
              required
              className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
            />
          </div>
          <div className="mb-5">
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
              className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
            />
          </div>
          <div className="mb-5 col-span-2">
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
                className="lucide lucide-receipt-text text-secondary"
              >
                <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                <path d="M14 8H8" />
                <path d="M16 12H8" />
                <path d="M13 16H8" />
              </svg>
              <span> Description :</span>
            </label>
            <textarea
              {...register("description")}
              name="description"
              placeholder="Enter Your Description"
              required
              className="h-40 border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
            />
          </div>
          <div className=" mt-6 col-span-2">
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
              <span>Create Donation</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateDonations;
