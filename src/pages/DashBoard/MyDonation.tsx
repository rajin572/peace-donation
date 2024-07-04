import Container from "@/components/ui/Container";
import Spninner from "@/components/ui/Spninner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonorQuery } from "@/redux/features/donor/donorApi";
import { useAppSelector } from "@/redux/hooks";
import { TDonationPost } from "@/types";
import { motion } from "framer-motion";

const MyDonation = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: donorData, isFetching } = useGetSingleDonorQuery(user!.email);

  console.log(donorData);

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="mt-10 mb-5">
        <Container>
          <Table>
            <TableCaption>My Donation Data </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>N0.</TableHead>
                <TableHead>Donation Image</TableHead>
                <TableHead>Donation Title</TableHead>
                <TableHead>Donation Category</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            {donorData?.data !== null ? (
              <TableBody>
                {donorData?.data?.donationPosts?.map(
                  (donationPost: TDonationPost, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell className="font-medium">
                        <img
                          src={donationPost?.image}
                          alt=""
                          className="w-12 h-12 rounded-full"
                        />
                      </TableCell>
                      <TableCell>{donationPost?.name}</TableCell>
                      <TableCell>{donationPost?.category}</TableCell>
                      <TableCell>{donationPost?.amount}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            ) : (
              <TableBody className="text-center">
                <TableRow>
                  <TableCell colSpan={5}>
                    <h1 className="text-2xl font-bold text-secondary">
                      You Haven't Donate Yet
                    </h1>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </Container>
      </div>
    </motion.div>
  );
};

export default MyDonation;
