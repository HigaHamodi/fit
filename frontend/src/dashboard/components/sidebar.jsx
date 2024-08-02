import { logoutUser } from "../../redux/apiCalls/authApiCall";
import { useSelector, useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import {
  Home as HomeIcon,
  Videocam as VideocamIcon,
  People as PeopleIcon,
  Group as GroupIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ExitToApp as ExitToAppIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const NavLinks = [
    { name: "קורסים", link: "/dashboard/courses", icon: <VideocamIcon /> },
    { name: "משתמשים", link: "/dashboard/users", icon: <PeopleIcon /> },
    { name: "צוות", link: "/dashboard/team", icon: <GroupIcon /> },
    { name: "הזמנות", link: "/dashboard/orders", icon: <FavoriteBorderIcon /> },
  ];

  return (
    <Fragment>
      {/* Persistent Drawer for larger screens */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={true}
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
            backgroundColor: "background.default",
            color: "text.primary",
          },
        }}
      >
        <Box p={2} display="flex" alignItems="center" justifyContent="center">
          <SettingsIcon />
          <Typography variant="h6" ml={2}>
            לוח מחוונים FitWell Academy
          </Typography>
        </Box>
        <Divider />
        <Box p={2} display="flex" justifyContent="center">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            חזרה לבית
          </Button>
        </Box>
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ראשי" />
          </ListItem>
          {NavLinks.map(({ name, link, icon }) => (
            <ListItem button component={NavLink} to={link} key={name}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          {user && (
            <ListItem button onClick={() => dispatch(logoutUser())}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="התנתקות" />
            </ListItem>
          )}
        </List>
      </Drawer>

      {/* AppBar with Hamburger Menu for smaller screens */}
      <AppBar
        position="fixed"
        sx={{ display: { lg: "none" }, backgroundColor: "primary.main" }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            לוח מחוונים FitWell Academy
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setShow(!show)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Temporary Drawer for smaller screens */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={show}
        onClose={() => setShow(false)}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
            backgroundColor: "background.default",
            color: "text.primary",
          },
        }}
      >
        <Box p={2} display="flex" alignItems="center" justifyContent="center">
          <SettingsIcon />
          <Typography variant="h6" ml={2}>
            לוח מחוונים FitWell Academy
          </Typography>
        </Box>
        <Divider />
        <Box p={2} display="flex" justifyContent="center">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            חזרה לבית
          </Button>
        </Box>
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ראשי" />
          </ListItem>
          {NavLinks.map(({ name, link, icon }) => (
            <ListItem button component={NavLink} to={link} key={name}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          {user && (
            <ListItem button onClick={() => dispatch(logoutUser())}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="התנתקות" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;
