import { TDonorTestimonial } from "@/types";

const TestimonialCard = ({ donor }: { donor: TDonorTestimonial }) => {
  const { image, name, testimonial, amount } = donor;
  return (
    <div className="lg:min-h-60 md:min-h-[280px] flex justify-between items-center gap-5 flex-col text-center bg-white dark:bg-zinc-900 px-5 py-5 rounded-md shadow-md">
      <img
        className="w-20 h-20 rounded-full border-secondary border-2"
        src={image}
        alt=""
      />
      <div>
        <h1 className="text-xl font-bold mb-2 text-primary dark:text-white">
          {name}
        </h1>
        <p className="mb-5 text-slate-700 dark:text-slate-400">{testimonial}</p>
        <p>
          <span className="font-semibold text-primary dark:text-white">
            Donation : $
          </span>
          <span className="font-semibold text-secondary italic">{amount}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
