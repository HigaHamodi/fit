import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Lottie from "lottie-react";
import dashedLineAnimation from "./dashedLineAnimation.json"; // Ensure the path to the animation file is correct

const Services = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="services"
      bgcolor={theme.palette.background.default}
      mt={5}
      py={5}
      borderBottom={2}
      borderColor={theme.palette.divider}
      position="relative" // Ensure the section has relative positioning
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Lottie
          animationData={dashedLineAnimation}
          loop={true}
          autoplay={true}
          style={{ height: "100px", width: "300px" }}
        />
      </Box>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight="extrabold"
          align="center"
          gutterBottom
          sx={{ position: "relative", zIndex: 1 }}
        >
          שירותים
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ position: "relative", zIndex: 1 }}
        >
          אנו לוקחים את ההדרכה והאימון בתחומי הכושר והתזונה לשלב הבא,
          <br /> על ידי מתן הזדמנויות לתלמידים שלנו לעבוד על פרויקטים אמיתיים.
        </Typography>
        <Box mt={2} pb={6} position="relative">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={4} textAlign="center">
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={64}
                    height={64}
                    bgcolor={theme.palette.background.paper}
                    border={2}
                    borderColor={theme.palette.divider}
                    borderRadius="50%"
                    boxShadow={1}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color={theme.palette.text.primary}
                    >
                      1
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  mt={3}
                  color={theme.palette.text.secondary}
                >
                  אנו מציעים מגוון רחב של קורסים בתחומי הכושר, התזונה ואורח חיים
                  בריא, ומספקים סביבה תומכת ומעשירה להתפתחות.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={64}
                    height={64}
                    bgcolor={theme.palette.background.paper}
                    border={2}
                    borderColor={theme.palette.divider}
                    borderRadius="50%"
                    boxShadow={1}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color={theme.palette.text.primary}
                    >
                      2
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  mt={3}
                  color={theme.palette.text.secondary}
                >
                  אימון מעשי לאורך כל תקופת הקורס עם המדריכים המנוסים ביותר
                  בתחום.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={64}
                    height={64}
                    bgcolor={theme.palette.background.paper}
                    border={2}
                    borderColor={theme.palette.divider}
                    borderRadius="50%"
                    boxShadow={1}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color={theme.palette.text.primary}
                    >
                      3
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  mt={3}
                  color={theme.palette.text.secondary}
                >
                  אנו מציעים תכנים עשירים ומלאים שיכינו אתכם לשוק העבודה המקומי
                  והבינלאומי.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
