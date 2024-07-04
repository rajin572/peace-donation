import { useGetDonorQuery } from "@/redux/features/donor/donorApi";
import Spninner from "./Spninner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { TDonorData } from "@/types";

const LeaderboardTable = () => {
  const { data: donorData, isFetching } = useGetDonorQuery(undefined);

  const sortedDonorData = donorData?.data
    ?.slice()
    .sort(
      (b: { amount: number }, a: { amount: number }) => a.amount - b.amount
    );

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <div>
      <Table>
        <TableCaption>All Donor Data </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>N0.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedDonorData?.map((donation: TDonorData, index: number) => (
            <TableRow key={donation._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">
                <img
                  src={donation.image}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </TableCell>
              <TableCell>{donation.name}</TableCell>
              <TableCell>{donation.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardTable;
