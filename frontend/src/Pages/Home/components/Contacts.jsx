import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import logo from "../../../assets/logo5.png";

const Contacts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="contact" // Ensure this id matches the href in the link
      sx={{
        bgcolor: theme.palette.background.default,
        py: 5,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 3 }}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            צור קשר
          </Typography>
          <Grid
            container
            spacing={4}
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={4}>
              <Box sx={{ textAlign: "center" }}>
                <img src={logo} alt="logo" style={{ height: "4rem" }} />
                <Typography
                  variant="body1"
                  sx={{ py: 4, textAlign: "justify" }}
                >
                  Fitwell Academy היא חברה שמתמחה בתחום הבריאות והכושר, ומציעה
                  מגוון רחב של תוכניות אימון ולימודים בתחום הכושר הגופני. המטרה
                  שלנו היא להעניק לכם את הידע והכלים הנדרשים לשיפור אורח החיים
                  הבריא שלכם, באמצעות תוכניות מותאמות אישית והדרכה מקצועית
                  מהטובים ביותר בתחום.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{ textDecoration: "underline", mb: 2 }}
                >
                  כתובת
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  רחוב הכרמל 2, כאוכב אבו אלהיגא, ישראל.
                  <br />
                  <a
                    href="https://www.google.com/maps/place/Kaukab+Abu+al-Hija/@32.8294926,35.2406303,15z/data=!3m1!4b1!4m6!3m5!1s0x151c4a834704ffe9:0xb1352950395720f0!8m2!3d32.831888!4d35.248701!16s%2Fm%2F0462pw2?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700"
                  >
                    {" "}
                    Google Maps
                  </a>
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  ניתן ליצור איתנו קשר בטלפון
                  <br />
                  <a
                    href="tel:+972544781868"
                    className="text-indigo-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    054-4781868
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="form"
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    textAlign: "right",
                    maxWidth: "400px",
                    minWidth: "358px",
                    mx: "auto",
                  }}
                >
                  <TextField
                    label="שם"
                    variant="outlined"
                    fullWidth
                    InputProps={{ style: { textAlign: "right" } }}
                  />
                  <TextField
                    label="מספר טלפון"
                    variant="outlined"
                    fullWidth
                    InputProps={{ style: { textAlign: "right" } }}
                  />
                  <TextField
                    label="הודעה"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{ style: { textAlign: "right" } }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      alignSelf: "center",
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    שלח
                  </Button>
                </Box>
              </Box>
            </Grid>
            {!isMobile ? (
              <Grid item xs={12} lg={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/register"
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    הצטרפו אלינו
                  </Button>
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contacts;
