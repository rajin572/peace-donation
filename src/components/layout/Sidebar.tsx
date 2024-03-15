import { Dispatch } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type TSlider = {
  slider: boolean;
  setSlider: Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ slider, setSlider }: TSlider) => {
  return (
    <motion.div
      className=" bg-primary text-white h-screen pt-20 "
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0, duration: 1 }}
    >
      {/* //* SideBar Collaps Buttons */}
      <div className="lg:hidden">
        {slider ? (
          <button onClick={() => setSlider(!slider)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 my-5 ms-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setSlider(!slider)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
      </div>
      {/* //* SideBar Collaps Menus */}
      <div className={`${slider ? "block" : "hidden lg:block "} `}>
        <div className="hidden lg:block ">
          <ul className=" flex justify-start items-start flex-col gap-5 px-5">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="donations">Donations</Link>
            </li>
            <li>
              <Link to="create-donation">Create Donation</Link>
            </li>
            <li>
              <Link to="create-testimonial">Create Testimonial</Link>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <ul className=" flex justify-start items-start flex-col gap-5  px-5">
            <li onClick={() => setSlider(!slider)}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li onClick={() => setSlider(!slider)}>
              <Link to="donations">Donations</Link>
            </li>
            <li onClick={() => setSlider(!slider)}>
              <Link to="create-donation">Create Donation</Link>
            </li>
            <li onClick={() => setSlider(!slider)}>
              <Link to="create-testimonial">Create Testimonial</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
