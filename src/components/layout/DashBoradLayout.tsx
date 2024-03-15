import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";
import { useAppSelector } from "@/redux/hooks";

const DashBoradLayout = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const [slider, setSlider] = useState(false);
  return (
    <div
      className={` min-h-screen w-full ${
        darkMode ? "bg-black text-white" : ""
      }`}
    >
      <div className="grid grid-cols-12 relative">
        <div
          className={`${
            slider
              ? "fixed left-0 top-0 bottom-0 lg:w-full w-3/4 sm:w-1/2"
              : "col-span-1 "
          } lg:relative lg:col-start-1 lg:col-end-3 z-40`}
        >
          <div className="sticky top-0">
            <Sidebar slider={slider} setSlider={setSlider} />
          </div>
        </div>
        {/* //*2nd grid */}
        <div
          className={`${
            slider ? "col-span-12" : "col-span-11"
          }  lg:col-span-10`}
        >
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <Container>
            <div className="w-[95%] mx-auto">
              <Outlet />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DashBoradLayout;
