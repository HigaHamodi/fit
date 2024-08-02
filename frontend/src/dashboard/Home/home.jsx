import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from "@mui/material";
import {
  People as PeopleIcon,
  SaveAlt as SaveIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import request from "../../utils/request";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();

  const [team, setTeam] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const topUsers = users.slice(0, 5);
  const topOrders = orders.slice(0, 5);

  const fetchTeam = useCallback(async () => {
    try {
      const { data } = await request.get("/api/engineers");
      setTeam(data);
    } catch (error) {
      console.error("Error fetching team data:", error);
      toast.error("Error fetching team data");
    }
  }, []);

  const fetchOrders = useCallback(async () => {
    try {
      const { data } = await request.get("/api/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders data:", error);
      toast.error("Error fetching orders data");
    }
  }, [user.token]);

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await request.get("/api/users", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users data:", error);
      toast.error("Error fetching users data");
    }
  }, [user.token]);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Box
      p={5}
      sx={{ bgcolor: theme.palette.background.default, minHeight: "100vh" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <CardContent>
              <Typography variant="h6">הזמנות</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <SaveIcon fontSize="large" />
                <Typography variant="h4">{orders.length}</Typography>
              </Box>
              <Typography variant="body2">סה&quot;כ הזמנות</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            }}
          >
            <CardContent>
              <Typography variant="h6">משתמשים</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <PeopleIcon fontSize="large" />
                <Typography variant="h4">{users.length}</Typography>
              </Box>
              <Typography variant="body2">סה&quot;כ משתמשים</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              bgcolor: theme.palette.info.main,
              color: theme.palette.info.contrastText,
            }}
          >
            <CardContent>
              <Typography variant="h6">צוות</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <GroupIcon fontSize="large" />
                <Typography variant="h4">{team.length}</Typography>
              </Box>
              <Typography variant="body2">סה&quot;כ חברי צוות</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" mb={2}>
            חמשת ההזמנות האחרונות
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>שם</TableCell>
                  <TableCell>טלפון</TableCell>
                  <TableCell>קורס</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topOrders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order?.user?.name}</TableCell>
                    <TableCell>{order?.user?.phone}</TableCell>
                    <TableCell>{order?.course?.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" mb={2}>
            משתמשים חדשים
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>שם</TableCell>
                  <TableCell>אימייל</TableCell>
                  <TableCell>טלפון</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topUsers.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default Home;
