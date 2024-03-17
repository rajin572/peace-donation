import { NavLink } from "react-router-dom";
import { useState } from "react";
import Container from "../ui/Container";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { motion } from "framer-motion";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useAppSelector((store) => store.theme);
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.div
      className="bg-primary text-secondary z-50 border-b border-secondary"
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Container>
        <header className="w-[95%] mx-auto py-3 flex justify-between items-center z-50">
          {/* //*Company name */}
          <div>
            <NavLink
              to="/"
              className="text-2xl cursor-pointer flex justify-center items-end gap-1"
            >
              <span className="font-bold opacity-90">Peace</span>
            </NavLink>
          </div>
          {/* //*Nav NavLinks */}
          <nav
            className={
              mobileMenuOpen
                ? " w-full lg:static absolute top-[50px] left-0 lg:bg-none bg-primary transition-all lg:z-0 -z-50 lg:border-none border-b-2 border-[#FB5E1C]"
                : " w-full lg:static absolute top-[-600px] left-0 transition-all lg:z-0 -z-50"
            }
          >
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block ">
              {" "}
              <ul className="flex justify-end items-center gap-5 lg:flex-row flex-col lg:py-0 py-10">
                <li className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary">
                  <NavLink
                    to="/donations"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    All Donations
                  </NavLink>
                </li>
                <li className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary">
                  <NavLink
                    to="/leaderboard"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    Leaderboard
                  </NavLink>
                </li>
                <li className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary">
                  <NavLink
                    to="/community"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    Community
                  </NavLink>
                </li>
                <li className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary">
                  <NavLink
                    to="/volunteer"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    Volunteer
                  </NavLink>
                </li>
                {user ? (
                  <li className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        cn({
                          "text-secondary": isActive,
                        })
                      }
                    >
                      DashBoard
                    </NavLink>
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
                    <NavLink
                      to="/login"
                      className="px-3 py-1 rounded border-2 border-secondary font-bold bg-secondary text-primary hover:bg-white hover:text-secondary hover:border-white transition-all duration-500"
                    >
                      LogIn
                    </NavLink>
                  </li>
                )}
                <button
                  onClick={handleToggleTheme}
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
                >
                  {darkMode ? <Sun /> : <Moon size={24} />}
                </button>
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div className="block lg:hidden">
              <ul className="flex justify-end items-center gap-5 lg:flex-row flex-col lg:py-0 py-10">
                <li
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary"
                >
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary"
                >
                  <NavLink
                    to="/donations"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    All Donations
                  </NavLink>
                </li>
                <li
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary"
                >
                  <NavLink
                    to="/leaderboard"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    Leaderboard
                  </NavLink>
                </li>
                <li
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary"
                >
                  <NavLink
                    to="/community"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    Community
                  </NavLink>
                </li>
                <li
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary"
                >
                  <NavLink
                    to="/volunteer"
                    className={({ isActive }) =>
                      cn({
                        "text-secondary": isActive,
                      })
                    }
                  >
                    Volunteer
                  </NavLink>
                </li>
                {user ? (
                  <li
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-secondary"
                  >
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        cn({
                          "text-secondary": isActive,
                        })
                      }
                    >
                      DashBoard
                    </NavLink>
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
                  <li
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:mb-0 cursor-pointer"
                  >
                    <NavLink
                      to="/login"
                      className="px-3 py-1 rounded border-2 border-secondary font-bold bg-secondary text-primary hover:bg-white hover:text-secondary hover:border-white transition-all duration-500"
                    >
                      LogIn
                    </NavLink>
                  </li>
                )}
                <button
                  onClick={handleToggleTheme}
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
                >
                  {darkMode ? <Sun /> : <Moon size={24} />}
                </button>
              </ul>
            </div>
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
