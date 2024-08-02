import { Box, Container, Grid, Typography } from "@mui/material";
import MessageImage from "./../../../assets/message.png";
import { useTheme } from "@mui/material/styles";

const Message = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="message" sx={{ py: 5, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box maxWidth="lg">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "extrabold",
                  color: theme.palette.text.primary,
                  mb: 2,
                  textAlign: { xs: "center" },
                }}
              >
                החזון שלנו
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                }}
                paragraph
              >
                אנחנו מאמינים שלכולנו יש את היכולת להתקדם ולהתפתח כל עוד ניתנה
                לנו סביבה פורייה שתסייע בכך. לכן, אנו צוות העבודה של Fitwell
                Academy, מתמקדים בתמיכה בתלמיד ברמה הלימודית והטכנית וגם ברמה
                הנפשית. אנו הופכים את מסע הלמידה לדרך שבה התשוקה וההנאה הן הבסיס
                להצלחה. זכור תמיד שאנו לצדך, מאמינים ביכולותיך ומצפים להתפתחות
                שלך בשקיקה.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={MessageImage}
                alt="About Us"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "8px",
                  boxShadow: theme.shadows[4],
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Message;
