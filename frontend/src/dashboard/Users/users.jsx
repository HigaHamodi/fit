import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import request from "../../utils/request";
import UserRow from "./userRow";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";

const Users = () => {
  const theme = useTheme();
  const [enabled, setEnabled] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);

  const addUserHandler = async () => {
    try {
      if (
        name.trim() === "" ||
        email.trim() === "" ||
        phone.trim() === "" ||
        password.trim() === ""
      ) {
        toast.error("בבקשה למלא כל השדות");
        return;
      }
      await request.post(
        "/api/auth/newuser",
        {
          name: name,
          email: email,
          phone: phone,
          password: password,
          isAdmin: enabled,
        },
        {
          headers: {
            Authorization: "Bearer " + user?.token,
          },
        }
      );
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      toast.success("המשתמש נוסף בהצלחה");
      setOpen(false);
      fetchData(); // Refresh data after adding a new user
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const { data } = await request.get("/api/users", {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      });
      setStudents(data);
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" color={theme.palette.text.primary}>
          משתמשים
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>שם</TableCell>
              <TableCell>אימייל</TableCell>
              <TableCell>טלפון</TableCell>
              <TableCell>סוג</TableCell>
              <TableCell>עוד</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((user) => (
              <UserRow
                key={user._id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                userId={user._id}
                isAdmin={user.isAdmin}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      >
        <DialogTitle>הוסף משתמש חדש</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
            <TextField
              label="שם"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="אימייל"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="טלפון"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="סיסמה"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                  color="primary"
                />
              }
              label="הרשאות אדמין"
              sx={{ mt: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={addUserHandler}
            color="primary"
            variant="contained"
            fullWidth
            sx={{ fontWeight: "bold" }}
          >
            הוסף משתמש
          </Button>
          <Button
            onClick={() => setOpen(false)}
            color="secondary"
            variant="contained"
            fullWidth
            sx={{ fontWeight: "bold" }}
          >
            ביטול
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Box>
  );
};

export default Users;
