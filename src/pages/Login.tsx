import Container from "@/components/ui/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { motion } from "framer-motion";
import { toast } from "sonner";
import AnimatedUnderline from "@/components/layout/AnimatedUnderline";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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

const Login = () => {
  const [defaultUser, setDefaultUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((store) => store.theme);
  const [login] = useLoginMutation();
  const { register, handleSubmit, setValue } = useForm(); // Remove defaultValues here

  // Update form default values when defaultUser changes
  useEffect(() => {
    setValue("email", defaultUser.email);
    setValue("password", defaultUser.password);
  }, [defaultUser, setValue]);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged In Successfully", {
        id: toastId,
        duration: 1200,
      });
      navigate(from, { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific error types here
        toast.error(`${error.message}`, {
          id: toastId,
          duration: 1000,
        });
      } else {
        // Handle other types of errors
        toast.error(`Invalid Email and Password`, {
          id: toastId,
          duration: 1000,
        });
      }
    }
  };

  return (
    <>
      <div className={`min-h-screen w-full ${darkMode ? "dark" : ""}`}>
        <Container>
          <div className="min-h-fit pb-20">
            <div className="flex justify-center items-center flex-col mb-10">
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
                  Login and Support Use
                </motion.h4>
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2"
                  variants={introChildren}
                >
                  Sign In Now!
                </motion.h2>
                <motion.div variants={introChildren}>
                  <AnimatedUnderline className="mx-auto" />
                </motion.div>
              </motion.div>
              {/* Set Default Value */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Button
                  onClick={() =>
                    setDefaultUser({
                      email: "admin@gmail.com",
                      password: "25802580",
                    })
                  }
                >
                  Set Admin Email and Password
                </Button>
                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                  Or
                </div>
                <Button
                  onClick={() =>
                    setDefaultUser({
                      email: "din.islam.rajin572@gmail.com",
                      password: "25802580",
                    })
                  }
                >
                  Set User Email and Password
                </Button>
              </motion.div>
              <motion.div
                className="mt-10 rounded-md border-2 border-primary dark:border-secondary dark:bg-zinc-950 p-5 md:p-10 w-90% sm:w-[70%] md:w-[50%] lg:w-[30%]"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5">
                    <label className="flex items-center text-primary">
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
                      <span className="dark:text-white"> Email :</span>
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
                    <label className="flex items-center text-primary">
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
                        <circle cx="12" cy="16" r="1" />
                        <rect x="3" y="10" width="18" height="12" rx="2" />
                        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                      </svg>
                      <span className="dark:text-white"> Password :</span>
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
                  <div className="mt-6">
                    <button className="w-full border-2 border-primary dark:border-secondary bg-primary dark:bg-secondary text-white font-bold py-2 rounded duration-500 transition-all flex justify-center items-center gap-2">
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
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1="15" x2="3" y1="12" y2="12" />
                      </svg>
                      <span>Sign In</span>
                    </button>
                  </div>
                </form>
                <p className="mt-10 text-primary dark:text-white">
                  Haven't any account,{" "}
                  <Link to="/register" className="text-secondary font-bold">
                    Create an account
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

export default Login;
