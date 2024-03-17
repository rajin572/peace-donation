const RecentPostCard = ({
  image,
  title,
  date,
}: {
  image: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex items-center lg:items-start gap-2 mb-5 border-b border-secondary p-1">
      <img className="h-16 w-16" src={image} alt="" />
      <div>
        <h4 className="lg:text-sm hover:text-secondary">{title}</h4>
        <h4 className="text-slate-700 dark:text-slate-400 text-sm lg:text-xs font-bold">
          {date}
        </h4>
      </div>
    </div>
  );
};

export default RecentPostCard;
