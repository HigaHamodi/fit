import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

const Layout = ({ toggleTheme, isDarkMode }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Outlet />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Layout;
