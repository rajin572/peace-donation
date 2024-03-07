import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../ui/Container";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
