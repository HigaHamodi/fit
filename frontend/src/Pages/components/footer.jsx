import { Box, Typography, Divider, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        py: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Divider />
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" color="textSecondary">
          © Fitwell Academy 2024. כל הזכויות שמורות.
          <br />
          פותח על ידי
          <a
            href="https://www.facebook.com/higa1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 underline transition hover:text-gray-700/75"
          >
            {" "}
            Hamodi Higa{" "}
          </a>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
