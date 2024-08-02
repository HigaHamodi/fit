import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import logo from "./../../../assets/logo.png";
import registerImage from "./../../../assets/registerpage.webp";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/apiCalls/authApiCall";
import swal from "sweetalert";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  useTheme,
  Grid,
} from "@mui/material";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      return toast.error("בבקשה להכניס שם");
    }
    if (email.trim() === "") {
      return toast.error("בבקשה להכניס אימייל");
    }
    if (phone.trim() === "") {
      return toast.error("בבקשה להכניס מספר טלפון");
    }
    if (phone.trim().length < 10 || phone.trim().length > 10) {
      return toast.error("מספר טלפון לא חוקי");
    }
    if (password.trim() === "") {
      return toast.error("בבקשה להכניס סיסמה");
    }
    dispatch(registerUser({ name, email, phone, password }));
    swal({
      title: "החשבון נוצר בהצלחה, אנא התחבר",
      icon: "success",
    }).then((isOk) => {
      if (isOk) {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        navigate("/login");
      }
    });
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
                    צור חשבון
                  </Typography>
                  <form onSubmit={submitHandler}>
                    <InputBox
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="שם"
                    />
                    <InputBox
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="אימייל"
                    />
                    <InputBox
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      name="phone"
                      placeholder="מספר טלפון"
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
                        צור חשבון
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
                    <span> כבר יש לך חשבון? </span>
                    <Link
                      to="/login"
                      style={{
                        fontWeight: "bold",
                        color: theme.palette.primary.main,
                      }}
                    >
                      התחבר
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
                  src={registerImage}
                  alt="Register"
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

export default Register;
