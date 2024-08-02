import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import request from "../../utils/request";
import OrderRow from "./OrderRow";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Person as PersonIcon,
  Book as BookIcon,
  Phone as PhoneIcon,
  CheckCircle as CheckCircleIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { ToastContainer } from "react-toastify";

const Orders = () => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await request.get("/api/orders", {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      });
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }, [user?.token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box
      sx={{
        p: 5,
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom>
        ההזמנות
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <PersonIcon /> שם
              </TableCell>
              <TableCell>
                <BookIcon /> קורס
              </TableCell>
              <TableCell>
                <PhoneIcon /> טלפון
              </TableCell>
              <TableCell>
                <CheckCircleIcon /> סטטוס
              </TableCell>
              <TableCell>
                <MoreVertIcon /> עוד
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                name={order?.user?.name}
                phone={order?.user?.phone}
                courseName={order?.course?.title} // Ensure this prop is passed correctly
                isApprov={order?.isApproved}
                reqId={order?._id}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ToastContainer />
    </Box>
  );
};

Orders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      }).isRequired,
      course: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      isApproved: PropTypes.bool.isRequired,
    })
  ),
};

export default Orders;
