/* eslint-disable @typescript-eslint/no-explicit-any */
import useImageUpload from "@/hooks/useImageUpload";
import { FieldValues, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { MapPin, Phone } from "lucide-react";
import AnimatedUnderline from "../layout/AnimatedUnderline";
import { motion } from "framer-motion";
import { usePostVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import ScrollToTop from "@/hooks/ScrollToTop";

const SignUpVolunteer = () => {
  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImageUpload();
  const [postVolunteer] = usePostVolunteerMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Volunteer Account....");
    const imageData = data.image;
    const imageUrl = await uploadImage(imageData);

    const volunteerData = {
      image: imageUrl?.data?.url,
      name: data.name.toLowerCase(),
      email: data.email,
      passion: data.passion,
      phoneNumber: data.phoneNumber,
      location: data.location,
    };

    try {
      await postVolunteer(volunteerData).unwrap();

      toast.success("Volunteer Account Created Successfully", {
        id: toastId,
        duration: 1000,
      });
      reset();
    } catch (err: any) {
      toast.error(`${err?.data?.message}`, {
        id: toastId,
        duration: 1200,
      });
    }
  };
  const { darkMode } = useAppSelector((store) => store.theme);

  return (
    <div>
      <ScrollToTop />
      <div
        className={` min-h-screen w-[90%] mx-auto ${darkMode ? "dark" : ""}`}
      >
        <motion.div
          className="py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="text-center mb-20">
            <h4 className="text-secondary text-lg font-semibold mb-3">
              Sign Up For Volunteer
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2">
              Let’s help together
            </h2>
            <AnimatedUnderline className="mx-auto" />
          </div>
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
                  <span> User Name :</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
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
                    className="lucide lucide-briefcase-business text-secondary"
                  >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                  <span> Your Passion :</span>
                </label>
                <input
                  type="text"
                  {...register("passion")}
                  name="passion"
                  placeholder="Passion"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
                />
              </div>
              <div className="mb-5">
                <label className="flex items-center text-primary dark:text-white">
                  <Phone width={20} height="16" className="text-secondary" />
                  <span> Phone Number :</span>
                </label>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  name="phoneNumber"
                  placeholder="016000000"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
                />
              </div>

              <div className="mb-5">
                <label className="flex items-center text-primary dark:text-white">
                  <MapPin width={20} height="16" className="text-secondary" />
                  <span> Location :</span>
                </label>
                <input
                  type="text"
                  {...register("location")}
                  name="location"
                  placeholder="Dhaka, Bangladesh"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded"
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
                  <span>Create Volunteer Account</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpVolunteer;
