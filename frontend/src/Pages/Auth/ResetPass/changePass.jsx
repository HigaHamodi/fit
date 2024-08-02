import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import InputBox from "./../components/InputBox";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const theme = useTheme();

  const submitHandle = (e) => {
    e.preventDefault();
    if (password.trim() === "") {
      toast.error("בבקשה להכניס סיסמה");
    } else if (repassword.trim() === "") {
      toast.error("בבקשה להכניס את הסיסמה שוב");
    } else if (repassword !== password) {
      toast.error("הסיסמאות אינן תואמות");
    } else {
      toast.success("הסיסמה שונתה בהצלחה");
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ bgcolor: "background.paper", textAlign: "center", p: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              שינוי סיסמה
            </Typography>
            <form onSubmit={submitHandle}>
              <InputBox
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="סיסמה חדשה"
              />
              <InputBox
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                type="password"
                name="repassword"
                placeholder="אשר סיסמה חדשה"
              />
              <Box mb={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ py: 1.5 }}
                >
                  שינוי סיסמה
                </Button>
              </Box>
              <Box mb={2}>
                <Button
                  component={Link}
                  to="/"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  sx={{
                    py: 1.5,
                    fontWeight: "bold",
                    borderRadius: 2,
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: theme.palette.primary.light,
                    },
                  }}
                >
                  חזרה לבית
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default ChangePass;
