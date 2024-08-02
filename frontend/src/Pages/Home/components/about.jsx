import { Container, Grid, Typography, Box } from "@mui/material";
import AboutImg from "./../../../assets/about.png";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="about" sx={{ py: 5, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={AboutImg}
                alt="About Us Image"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "8px",
                  boxShadow: theme.shadows[4],
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box maxWidth="lg">
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                  mb: 2,
                  textAlign: { xs: "center" },
                }}
              >
                מי אנחנו?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                }}
              >
                FITWELL ACADEMY מתמחה בלימוד ואימוני כושר אישיים. אנו מספקים
                חוויות כושר מותאמות אישית המשלבות אימונים מקצועיים עם תזונה
                בריאה. מטרתנו היא להנחות את הלקוחות שלנו לעבר חיים בריאים
                ומאוזנים על ידי שיטות עבודה מוכחות ומדריכים מומחים.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: theme.palette.text.secondary,
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                }}
              >
                התוכניות שלנו כוללות אימוני כושר מגוונים, ייעוץ תזונתי, וסדנאות
                להתפתחות אישית. אנו שואפים להעניק לכל מתאמן את הכלים והידע
                הדרושים כדי לשפר את איכות חייו ולממש את הפוטנציאל הגופני והמנטלי
                שלו.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
