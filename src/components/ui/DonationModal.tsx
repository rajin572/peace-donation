import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TDonationDetail } from "@/types";
import { Link } from "react-router-dom";

const DonationModal = ({
  donation,
  user,
}: {
  donation: TDonationDetail;
  user: string | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] hover:bg-secondary transition-all duration-500">
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate On {donation.title}</DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <img className="h-40 w-full" src={donation.image} alt="" />
            <DialogDescription className="text-primary mt-2">
              <span className="text-secondary">Category : </span>
              {donation.category}
            </DialogDescription>
            <DialogDescription className="text-primary mt-2">
              <span className="text-secondary">Amount : </span>
              {`$${donation.amount}`}
            </DialogDescription>
          </div>
          <div className="mt-10">
            <DialogTitle className="mb-2">User Info : </DialogTitle>
            <h2 className="text-base text-secondary font-semibold">
              <span className="text-primary">Your Email : </span>
              {user}
            </h2>
          </div>
        </div>
        <DialogFooter>
          <Link to="/dashboard">
            <Button type="submit">Donate</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
