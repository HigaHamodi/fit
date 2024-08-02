import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import InputBox from "./../components/InputBox";
import forgotImage from "./../../../assets/forgot.webp"; // Importing the forgot image
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  useTheme,
  Grid,
} from "@mui/material";
import { useState } from "react";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      return toast.error("בבקשה להכניס מייל");
    } else {
      return toast.success("קישור לאיפוס הסיסמה נשלח לכתובת האימייל");
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
                  <Typography variant="h4" gutterBottom>
                    שכחת סיסמה?
                  </Typography>
                  <form onSubmit={submitHandler}>
                    <InputBox
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="אימייל"
                    />
                    <Box mb={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ py: 1.5 }}
                      >
                        איפוס סיסמה
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
                  <Typography variant="body2" sx={{ mt: 3 }}>
                    נזכרת בסיסמה?
                    <Link
                      to="/login"
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                        marginLeft: "5px",
                      }}
                    >
                      התחברות
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
                  src={forgotImage}
                  alt="Forgot Password"
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

export default ResetPass;
