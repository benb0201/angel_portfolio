import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Contact from "../sections/Contact";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
};

export default RootLayout;
