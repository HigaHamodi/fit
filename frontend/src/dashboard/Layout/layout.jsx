import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { Box, CssBaseline } from "@mui/material";

const Layout = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          paddingRight: { lg: "300px" },
          backgroundColor: "background.default",
          paddingTop: { xs: "57px", lg: 0 },
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default Layout;
