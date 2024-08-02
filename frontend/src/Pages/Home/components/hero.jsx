import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import bannerImage from "../../../assets/bannerSubject.webp"; // Ensure the path is correct

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "70vh", // Fixed height
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: 0, // Ensure no margin on top
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1, // Adjust the opacity as needed
          zIndex: -1, // Ensure the pseudo-element is behind the content
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 20 }}>
        <Box maxWidth="md" mx="auto">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" }, // Adjusted font size for responsiveness
              fontWeight: "bold",
              lineHeight: 1.2,
              color: theme.palette.text.primary,
            }}
          >
            ברוכים הבאים ל
            <br />
            <Typography
              component="span"
              sx={{ color: theme.palette.primary.main, fontSize: "inherit" }}
            >
              FITWELL ACADEMY
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" }, // Adjusted font size for responsiveness
              color: theme.palette.text.primary, // Changed to primary text color
            }}
          >
            המומחים שלנו בהכשרת מקצועות הספורט והכושר
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Adjusted font size for responsiveness
              color: theme.palette.text.primary, // Changed to primary text color
            }}
          >
            הצטרפו אלינו וקבלו את הכלים המתקדמים ביותר לשיפור הכושר הגופני שלכם
            ולהתאמת הגוף והנפש לאורח חיים בריא
          </Typography>
          {!user && (
            <Box mt={4}>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: "xl", px: 4, py: 2 }}
              >
                הרשמה עכשיו
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
