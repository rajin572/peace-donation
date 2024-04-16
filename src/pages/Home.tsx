import Banner from "@/components/home/Banner";
import Gallery from "@/components/home/Gallery";
import NewsLetter from "@/components/home/NewsLetter";
import OurMission from "@/components/home/OurMission";
import SectionAboutUs from "@/components/home/SectionAboutUs";
import Testimonials from "@/components/home/Testimonials";
import TopDonations from "@/components/home/TopDonations";
import { useAppSelector } from "@/redux/hooks";

const Home = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-black dark:text-white">
        <Banner />
        <SectionAboutUs />
        <TopDonations />
        <Gallery />
        <OurMission />
        <Testimonials />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
