import ScrollToTop from "@/hooks/ScrollToTop";
import { usePostTestimonialMutation } from "@/redux/features/tesimonial/testimonial";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonorQuery } from "@/redux/features/donor/donorApi";
import Spninner from "@/components/ui/Spninner";
import useImageUpload from "@/hooks/useImageUpload";

// const defaultValues= {
//   email: donorData?.data?.email,
//   image: donorData?.data?.image,
//   name: donorData?.data?.name,
//   amount: donorData?.data?.amount || 0,
//   testimonial: "",
// }

const CreateTestimonial = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data: donorData, isFetching } = useGetSingleDonorQuery(user!.email);
  console.log(donorData);

  const [postTestimonial] = usePostTestimonialMutation();

  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImageUpload();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Testimonial....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);

      const testimonialData = {
        image: imageUrl?.data?.url,
        name: data.name.toLowerCase(),
        email: data.email,
        amount: Number(data.amount),
        testimonial: data.testimonial,
      };

      postTestimonial(testimonialData).unwrap;

      toast.success("Testimonial Post Successfully", {
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
  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <>
      <ScrollToTop />
      <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
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
                className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded text-black dark:text-white"
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
                  className="lucide lucide-captions text-secondary"
                >
                  <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                  <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
                </svg>
                <span> Name :</span>
              </label>
              <input
                type="text"
                {...register("name")}
                name="name"
                defaultValue={donorData?.data?.name || ""}
                placeholder="Enter Your Name"
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
                  className="lucide lucide-captions text-secondary"
                >
                  <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                  <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
                </svg>
                <span> Email :</span>
              </label>
              <input
                type="text"
                {...register("email")}
                name="email"
                placeholder="Enter Your Email"
                defaultValue={donorData?.data?.email || ""}
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
                  className="lucide lucide-captions text-secondary"
                >
                  <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                  <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
                </svg>
                <span> Your Donated Amount :</span>
              </label>
              <input
                type="number"
                {...register("amount")}
                name="amount"
                defaultValue={donorData?.data?.amount || 0}
                placeholder="Amonut"
                required
                readOnly
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
                <span> Testimonial :</span>
              </label>
              <textarea
                {...register("testimonial")}
                name="testimonial"
                placeholder="Enter Your Testimonial"
                required
                className="h-40 border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
              />
            </div>

            <div className=" mt-6 col-span-2">
              {donorData?.data ? (
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
                  <span>Create Testimonial</span>
                </button>
              ) : (
                <p className="text-primary dark:text-white font-bold text-lg">
                  <span className="text-secondary font-bold underline">
                    Note
                  </span>
                  <span className="text-secondary font-bold"> : </span>
                  If You Are Not a Donor You Can't Post Any Testimonial. You
                  Must Be a Donor To Post a Testimonial.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default CreateTestimonial;
