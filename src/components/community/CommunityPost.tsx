import communityImage from "../../assets/about.jpg";

const CommunityPost = () => {
  return (
    <div className="mb-20">
      <div>
        <div className="w-[95%] lg:w-full mx-auto">
          {/* //* Image */}
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
              src={communityImage}
              alt=""
            />
          </div>
          <div>
            {/* //* Tags */}
            <h3 className="mb-2 mt-10 text-sm">
              <span className="bg-secondary py-1 px-2 text-white mx-2">
                Food
              </span>
              <span className="bg-secondary py-1 px-2 text-white mx-2">
                Water
              </span>
            </h3>
            {/* //* Post Title */}
            <h1 className="text-2xl md:text-3xl text-primary dark:text-white font-bold mb-4">
              Clean Water Charity - $15,000 funds a well for a village wish your
              help
            </h1>
            {/* //* Author Details */}
            <h4 className="text-slate-700 dark:text-slate-400 mb-10 text-sm dark:hover:text-secondary hover:text-secondary">
              HASIB SHARIF / 21 FEB, 2024
            </h4>
            <p>
              The Clean Water Charity extends a heartfelt invitation to join
              their mission in bringing life-changing access to clean water to
              underserved villages worldwide. With just $15,000, the charity can
              fund the construction of a well, transforming the daily reality
              for an entire community. Your support becomes a beacon of hope,
              ensuring families no longer need to trek miles for contaminated
              water sources or suffer from waterborne illnesses. By contributing
              to this noble cause, you directly impact lives, empowering
              communities with the most fundamental resource for survival and
              prosperity. Together, let's make a tangible difference, one well
              at a time, and fulfill the collective wish for a world where clean
              water is a universal reality. Join hands with us today and be the
              catalyst for positive change.
              <br />
              <br />
              The Clean Water Charity fervently appeals for your assistance in
              realizing its vision of providing clean and safe water to
              communities in dire need. With a donation of $15,000, you can
              sponsor the construction of a much-needed well, becoming an
              integral part of transforming lives and uplifting entire villages.
              Your generosity will alleviate the burdens of water scarcity and
              contamination, fostering healthier, more resilient communities.
              Every drop of clean water delivered through this initiative
              represents a ripple of hope, cascading into improved health,
              education, and economic opportunities for generations to come.
              Your support is not merely a financial contribution; it's a beacon
              of compassion and solidarity, resonating with those who dream of a
              future free from the shackles of water insecurity. Together, let's
              embark on this noble journey, empowering communities and
              fulfilling the fundamental human right to clean water. Join us in
              our endeavor, and together, we can make waves of positive change
              across the globe.
              <br />
              <br />
              The Clean Water Charity humbly reaches out, urging your gracious
              involvement in our mission to provide clean, life-sustaining water
              to communities in dire need. With a donation of $15,000, you can
              sponsor the construction of a vital well, serving as a beacon of
              hope for villages struggling with water scarcity. Your generous
              contribution will not only quench the immediate thirst of those in
              need but will also lay the foundation for healthier and more
              prosperous futures. By investing in this crucial infrastructure,
              you're empowering communities to break the cycle of poverty and
              disease, unlocking their potential for growth and development.
              Your support represents more than just financial aid; it embodies
              a shared commitment to human dignity and social justice, ensuring
              that no one is left behind in the quest for clean water. Together,
              let's turn the tide on water insecurity and sow the seeds of
              lasting change. Join hands with us today, and together, we'll make
              a tangible difference, drop by drop, well by well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
