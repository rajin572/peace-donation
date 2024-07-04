// Type for donationPost
export type TDonationPost = {
  name: string;
  image: string;
  category: string;
  amount: number;
};

// Type for donorData
export type TDonorData = {
  _id: string | null | undefined;
  name: string | undefined;
  email: string | undefined;
  amount: number;
  image: string;
  donationPost: TDonationPost;
};
