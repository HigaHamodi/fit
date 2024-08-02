import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import loginImage from "./../../../assets/loginpage.webp"; // Importing the login image
import InputBox from "../components/InputBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/apiCalls/authApiCall";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  useTheme,
  Grid,
} from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const theme = useTheme();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      return toast.error("בבקשה להכניס אימייל");
    } else if (password.trim() === "") {
      return toast.error("בבקשה להכניס סיסמה");
    }
    dispatch(loginUser({ email, password }));
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            bgcolor: "background.paper",
            boxShadow: theme.shadows[5],
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Box textAlign="center">
                  <Link to="/">
                    <img src={logo} alt="logo" style={{ maxWidth: "160px" }} />
                  </Link>
                  <Typography
                    variant="h5"
                    mb={3}
                    color="text.primary"
                    sx={{ mt: 2 }}
                  >
                    התחבר
                  </Typography>
                  <form onSubmit={submitHandler}>
                    <InputBox
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="אימייל"
                    />
                    <InputBox
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="סיסמה"
                    />
                    <Box mb={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ py: 1.5, fontWeight: "bold", borderRadius: 2 }}
                      >
                        התחבר
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
                  <Typography color="text.secondary">
                    <Link
                      to="/reset-password"
                      style={{
                        display: "block",
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      שכחת סיסמה?
                    </Link>
                    <span> אין לי חשבון </span>
                    <Link
                      to="/register"
                      style={{
                        fontWeight: "bold",
                        color: theme.palette.primary.main,
                      }}
                    >
                      יצירת חשבון
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 0,
                }}
              >
                <img
                  src={loginImage}
                  alt="Login"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default SignIn;
