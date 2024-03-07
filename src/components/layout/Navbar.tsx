import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../ui/Container";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { motion } from "framer-motion";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <motion.div
      className="bg-primary text-secondary z-50 border-b-2 border-secondary"
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Container>
        <header className="w-[90%] mx-auto py-3 flex justify-between items-center z-50">
          {/* //*Company name */}
          <div>
            <Link
              to="/"
              className="text-2xl cursor-pointer flex justify-center items-end gap-1"
            >
              <span className="font-bold opacity-90">Peace</span>
            </Link>
          </div>
          {/* //*Nav links */}
          <nav
            className={
              mobileMenuOpen
                ? " lg:w-[40%] w-full lg:static absolute top-[50px] left-0 lg:bg-none bg-primary transition-all lg:z-0 -z-50 lg:border-none border-b-2 border-[#FB5E1C]"
                : " lg:w-[40%] w-full lg:static absolute top-[-250px] left-0 transition-all lg:z-0 -z-50"
            }
          >
            <ul className="flex justify-end items-center gap-8 lg:flex-row flex-col lg:py-0 py-10">
              <li className="lg:mb-0 mb-5 cursor-pointer  group relative  text-white hover:text-secondary">
                <Link to="/donations" className="after-underline-after">
                  All Donations
                </Link>
              </li>
              {user ? (
                <li className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary">
                  <Link to="/dashboard" className="after-underline-after">
                    DashBoard
                  </Link>
                </li>
              ) : (
                ""
              )}
              {user ? (
                <li className="lg:mb-0 cursor-pointer" onClick={handleLogout}>
                  <button className="px-3 rounded border-2 border-secondary font-bold bg-secondary text-primary hover:bg-white hover:text-secondary hover:border-white transition-all duration-500">
                    LogOut
                  </button>
                </li>
              ) : (
                <li className="lg:mb-0 cursor-pointer">
                  <Link
                    to="/login"
                    className="px-3 py-1 rounded border-2 border-secondary font-bold bg-secondary text-primary hover:bg-white hover:text-secondary hover:border-white transition-all duration-500"
                  >
                    LogIn
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          {/* //*Icons */}
          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </header>
      </Container>
    </motion.div>
  );
};

export default Navbar;
