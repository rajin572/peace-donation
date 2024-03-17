import Comments from "@/components/community/Comments";
import CommunityPost from "@/components/community/CommunityPost";
import RecentPostCard from "@/components/community/RecentPostCard";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useAppSelector } from "@/redux/hooks";

import recentPostImage01 from "../assets/gallery01.jpg";
import recentPostImage02 from "../assets/gallery02.jpg";
import recentPostImage03 from "../assets/gallery03.jpg";
import recentPostImage04 from "../assets/gallery04.jpg";
import recentPostImage05 from "../assets/gallery05.jpg";
import recentPostImage06 from "../assets/gallery06.jpg";
import recentPostImage07 from "../assets/gallery07.jpg";
import recentPostImage08 from "../assets/gallery08.jpg";

const Community = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <div className="py-20 w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-12 justify-items-center items-start gap-10">
        <div className="lg:col-span-9">
          <CommunityPost />
          <div>
            <Comments />
          </div>
        </div>
        <div className="lg:col-span-3 w-full">
          <h1 className="text-xl md:text-2xl text-primary dark:text-white font-bold">
            Recent Posts
          </h1>
          <p className="w-28 h-1 rounded-xl bg-secondary mb-4"></p>
          <RecentPostCard
            image={recentPostImage01}
            title={"Donate, Transform Lives"}
            date={"1 Jan 2024"}
          />
          <RecentPostCard
            image={recentPostImage02}
            title={"Water for All"}
            date={"15 Jan 2024"}
          />
          <RecentPostCard
            image={recentPostImage03}
            title={"Give Clean Water"}
            date={"27 Jan 2024"}
          />
          <RecentPostCard
            image={recentPostImage04}
            title={"Drops of Hope"}
            date={"31 Jan 2024"}
          />
          <RecentPostCard
            image={recentPostImage05}
            title={"Make Waves, Donate"}
            date={"1 Feb 2024"}
          />
          <RecentPostCard
            image={recentPostImage06}
            title={"Donate, Save Lives"}
            date={"7 Feb 2024"}
          />
          <RecentPostCard
            image={recentPostImage07}
            title={"Nourish with Love"}
            date={"17 Feb 2024"}
          />
          <RecentPostCard
            image={recentPostImage08}
            title={"Share, Support, Sustain"}
            date={"27 Feb 2024"}
          />
          {/* //* Tags */}
          <h1 className="text-xl md:text-2xl text-primary dark:text-white font-bold mt-10">
            Tags
          </h1>
          <p className="w-28 h-1 rounded-xl bg-secondary mb-4"></p>
          <h3 className="mt-2 text-sm flex flex-wrap gap-3">
            <span className="bg-secondary py-1 px-2 text-white mx-2 cursor-pointer">
              Food
            </span>
            <span className="bg-secondary py-1 px-2 text-white mx-2 cursor-pointer">
              Water
            </span>
            <span className="bg-secondary py-1 px-2 text-white mx-2 cursor-pointer">
              Clothing
            </span>
            <span className="bg-secondary py-1 px-2 text-white mx-2 cursor-pointer">
              Shelter
            </span>
            <span className="bg-secondary py-1 px-2 text-white mx-2 cursor-pointer">
              Medical Suply
            </span>
            <span className="bg-secondary py-1 px-2 text-white mx-2 cursor-pointer">
              Relief Goods
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Community;
