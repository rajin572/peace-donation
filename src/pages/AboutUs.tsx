import AboutUsBanner from "@/components/aboutUs/AboutUsBanner";
import OurVolunteer from "@/components/aboutUs/OurVolunteer";
import Gallery from "@/components/home/Gallery";
import NewsLetter from "@/components/home/NewsLetter";
import OurMission from "@/components/home/OurMission";
import SectionAboutUs from "@/components/home/SectionAboutUs";
import Testimonials from "@/components/home/Testimonials";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useAppSelector } from "@/redux/hooks";

const AboutUs = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-black dark:text-white">
        <ScrollToTop />
        <AboutUsBanner />
        <SectionAboutUs />
        <OurVolunteer />
        <Gallery />
        <OurMission />
        <Testimonials />
        <NewsLetter />
      </div>
    </div>
  );
};

export default AboutUs;
