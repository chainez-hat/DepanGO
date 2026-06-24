//import { Outlet } from "react-router";
import { Outlet, useLocation } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function PublicLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/register" ||
    location.pathname === "/request";

  return (
    <div>
      {!hideLayout && (
        <Navbar
          dark={
            location.pathname === "/become-technician" ||
            location.pathname === "/services" ||
            location.pathname === "/how-it-works" ||
            location.pathname === "/about"
          }
        />
      )}

      <main role="main">
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
      <ScrollToTopButton />
    </div>
  );
}
