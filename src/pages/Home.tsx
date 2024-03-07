import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import Gallery from "@/components/home/Gallery";
import NewsLetter from "@/components/home/NewsLetter";
import OurMission from "@/components/home/OurMission";
import Testimonials from "@/components/home/Testimonials";
import TopDonations from "@/components/home/TopDonations";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <TopDonations />
      <Gallery />
      <OurMission />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default Home;
