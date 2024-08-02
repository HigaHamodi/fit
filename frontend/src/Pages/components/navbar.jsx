import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThemeToggle from "../../components/ThemeToggle";
import logo from "../../assets/logo5.png";

import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240; // Define drawerWidth

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    toast.success("התנתקת בהצלחה");
  };

  const { user } = useSelector((state) => state.auth);
  const links = [
    { name: "שירותים", link: "#services" },
    { name: "אודות", link: "#about" },
    { name: "הקורסים", link: "#courses" },
    { name: "החזון שלנו", link: "#message" },
    { name: "מרצים", link: "#team" },
    { name: "צור קשר", link: "#contact" },
  ];

  const userActions = user ? (
    user.isAdmin ? (
      <Button
        component={Link}
        to="/dashboard"
        color="inherit"
        startIcon={<DashboardIcon />}
      >
        לוח בקרה
      </Button>
    ) : (
      <form onSubmit={logoutHandler}>
        <Button type="submit" color="inherit" startIcon={<LogoutIcon />}>
          התנתקות
        </Button>
      </form>
    )
  ) : (
    <>
      <Button
        component={Link}
        to="/login"
        color="inherit"
        startIcon={<DashboardIcon sx={{ mr: 1 }} />}
      >
        התחברות
      </Button>
      <Button
        component={Link}
        to="/register"
        color="inherit"
        startIcon={<PersonAddIcon />}
      >
        יצירת חשבון
      </Button>
    </>
  );

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        backgroundColor: isDarkMode
          ? theme.palette.background.paper
          : theme.palette.primary.main,
        mb: 0,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Typography variant="h6" color="inherit">
              Fitwell Academy
            </Typography>
            <img src={logo} alt="Fitwell Academy" style={{ height: "40px" }} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {links.map((link) => (
              <Button
                key={link.name}
                color="inherit"
                component="a"
                href={link.link}
                sx={{ fontSize: "1rem" }} // Increased font size
              >
                {link.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {userActions}
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        <Box
          sx={{
            width: drawerWidth,
          }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <Box sx={{ textAlign: "center", my: 2 }}>
            <img src={logo} alt="Fitwell Academy" style={{ height: "40px" }} />
          </Box>
          <List>
            {links.map((link) => (
              <ListItem key={link.name} disablePadding>
                <ListItemButton component="a" href={link.link}>
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {user ? (
              user.isAdmin ? (
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/dashboard">
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="לוח בקרה" />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem disablePadding>
                  <ListItemButton onClick={logoutHandler}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="התנתקות" />
                  </ListItemButton>
                </ListItem>
              )
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/login">
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="התחברות" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/register">
                    <ListItemIcon>
                      <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="יצירת חשבון" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

export default Navbar;
