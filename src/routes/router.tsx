import App from "@/App";
import DashBoradLayout from "@/components/layout/DashBoradLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import CreateDonations from "@/pages/DashBoard/CreateDonations";
import DashBoard from "@/pages/DashBoard/DashBoard";
import DashBoardDonations from "@/pages/DashBoard/DashBoardDonations";

import DonationDetails from "@/pages/DonationDetails";
import Donations from "@/pages/Donations";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/donations/:id",
        element: <DonationDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashBoradLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,

        element: <DashBoard />,
      },
      {
        path: "/dashboard/donations",
        element: <DashBoardDonations />,
      },
      {
        path: "/dashboard/create-donation",
        element: <CreateDonations />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
