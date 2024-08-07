import App from "@/App";
import AdminRoute from "@/components/layout/AdminRouted";
import DashBoradLayout from "@/components/layout/DashBoradLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import CheckOutDonation from "@/pages/CheckOutDonation";
import Community from "@/pages/Community";
import CreateDonations from "@/pages/DashBoard/CreateDonations";
import CreateTestimonial from "@/pages/DashBoard/CreateTestimonial";
import DashBoard from "@/pages/DashBoard/DashBoard";
import DashBoardDonations from "@/pages/DashBoard/DashBoardDonations";
import MyDonation from "@/pages/DashBoard/MyDonation";

import DonationDetails from "@/pages/DonationDetails";
import Donations from "@/pages/Donations";
import Home from "@/pages/Home";
import Leaderboard from "@/pages/Leaderboard";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import Volunteer from "@/pages/Volunteer";
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
        path: "/about-us",
        element: <AboutUs />,
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
        path: "/check-out",
        element: <CheckOutDonation />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
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
        path: "/dashboard/my-donation",
        element: <MyDonation />,
      },
      {
        path: "/dashboard/donations",
        element: (
          <AdminRoute>
            <DashBoardDonations />
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/create-donation",
        element: (
          <AdminRoute>
            <CreateDonations />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
