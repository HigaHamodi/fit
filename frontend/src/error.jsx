import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";

const Error = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.main"
      minHeight="100vh"
      py={15}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          component="h2"
          color="white"
          fontWeight="bold"
          mb={2}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          color="white"
          fontWeight="semibold"
          mb={3}
        >
          Oops! That page can’t be found
        </Typography>
        <Typography variant="body1" color="white" mb={5}>
          The page you are looking for may have been deleted
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to="/"
          sx={{
            borderColor: "white",
            color: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "primary.main",
            },
          }}
        >
          Go To Home
        </Button>
      </Container>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        justifyContent="space-between"
        sx={{ zIndex: -1 }}
      >
        <Box width="33%" bgcolor="rgba(255, 255, 255, 0.1)" />
        <Box width="33%" display="flex">
          <Box width="50%" bgcolor="rgba(255, 255, 255, 0.1)" />
          <Box width="50%" bgcolor="rgba(255, 255, 255, 0.1)" />
        </Box>
        <Box width="33%" bgcolor="rgba(255, 255, 255, 0.1)" />
      </Box>
    </Box>
  );
};

export default Error;
