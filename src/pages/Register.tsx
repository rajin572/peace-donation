/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/ui/Container";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import AnimatedUnderline from "@/components/layout/AnimatedUnderline";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useAppSelector } from "@/redux/hooks";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const Register = () => {
  const navigate = useNavigate();
  const { darkMode } = useAppSelector((store) => store.theme);
  const [registration] = useRegisterMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating.....");
    try {
      const userInfo = {
        name: data.name.toLowerCase(),
        email: data.email,
        password: data.password,
      };

      await registration(userInfo).unwrap();

      toast.success("Account Created Successfully. Please Login Now", {
        id: toastId,
        duration: 1000,
      });
      navigate(`/login`);
    } catch (error: any) {
      toast.error(`${error.data.message}`, {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <>
      <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
        <Container>
          <ScrollToTop />
          <div className="min-h-fit pb-20">
            <div className=" flex justify-center items-center flex-col mb-10">
              <motion.div
                className="text-center my-10"
                variants={intro}
                initial="hidden"
                animate="visible"
              >
                <motion.h4
                  className="text-secondary text-lg font-semibold mb-3"
                  variants={introChildren}
                >
                  Create Account For Support Use
                </motion.h4>
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2"
                  variants={introChildren}
                >
                  Sign Up Now!
                </motion.h2>
                <motion.div variants={introChildren}>
                  <AnimatedUnderline className="mx-auto" />
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-10 rounded-md border-2 border-primary  dark:border-secondary dark:bg-zinc-950 p-5 md:p-10 w-90% sm:w-[70%] md:w-[50%] lg:w-[30%]"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        className="lucide lucide-user text-secondary"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span> User Name :</span>
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      name="name"
                      placeholder="Enter Your User Name"
                      required
                      className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded text-black"
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
                        className="lucide lucide-mail text-secondary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span> Email :</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded text-black"
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
                        className="lucide lucide-lock-keyhole text-secondary"
                      >
                        <circle cx="12" cy="16" r="1" />
                        <rect x="3" y="10" width="18" height="12" rx="2" />
                        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                      </svg>
                      <span> Password :</span>
                    </label>
                    <input
                      {...register("password")}
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                      required
                      className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded text-black"
                    />
                  </div>
                  <div className=" mt-6">
                    <button className="w-full border-2 border-primary bg-primary dark:border-secondary dark:bg-secondary text-white font-bold py-2 rounded duration-500 transition-all flex justify-center items-center gap-2">
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
                        <path d="M2 21a8 8 0 0 1 13.292-6" />
                        <circle cx="10" cy="8" r="5" />
                        <path d="M19 16v6" />
                        <path d="M22 19h-6" />
                      </svg>
                      <span>Sign Up</span>
                    </button>
                  </div>
                </form>
                <p className="mt-10 text-primary dark:text-white">
                  All ready have an account,{" "}
                  <Link to="/login" className=" text-secondary font-bold">
                    Sign In From Here
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Register;
