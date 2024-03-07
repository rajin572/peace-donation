import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TDonationDetail } from "@/types";
import { FilePenLine } from "lucide-react";

const EditDonationModal = ({ donation }: { donation: TDonationDetail }) => {
  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-xs p-2 w-fit h-fit me-2">
            <FilePenLine className="h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Donation Post</DialogTitle>
          </DialogHeader>
          <div>
            <form className="md:grid md:grid-cols-2 gap-1">
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-image text-secondary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span> Image Link :</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={donation.image}
                  placeholder="Enter Your Image Link"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-list-collapse text-secondary"
                  >
                    <path d="m3 10 2.5-2.5L3 5" />
                    <path d="m3 19 2.5-2.5L3 14" />
                    <path d="M10 6h11" />
                    <path d="M10 12h11" />
                    <path d="M10 18h11" />
                  </svg>
                  <span> Category :</span>
                </label>
                <select
                  className="border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                  name="category"
                  defaultValue={donation.category}
                >
                  <option label="Select Category" />
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Shelter">Shelter</option>
                  <option value="Medical Supply">Medical Supply</option>
                  <option value="Relief Goods">Relief Goods</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-captions text-secondary"
                  >
                    <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                    <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
                  </svg>
                  <span> Title :</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={donation.title}
                  placeholder="Enter Your Title"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dollar-sign text-secondary"
                  >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span> Amount :</span>
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter Your Amount"
                  required
                  defaultValue={donation.amount}
                  className="border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                />
              </div>
              <div className="mb-2 col-span-2">
                <label className="flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-receipt-text text-secondary"
                  >
                    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                    <path d="M14 8H8" />
                    <path d="M16 12H8" />
                    <path d="M13 16H8" />
                  </svg>
                  <span> Description :</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Enter Your Description"
                  required
                  className="h-20 border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                  defaultValue={donation.description}
                />
              </div>
            </form>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-pen-line"
                >
                  <path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                  <path d="M8 18h1" />
                  <path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
                </svg>
                <span>Update Post</span>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDonationModal;
