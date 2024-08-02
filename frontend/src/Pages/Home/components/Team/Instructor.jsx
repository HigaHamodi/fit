import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Instructor = (props) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        bgcolor: theme.palette.background.paper,
        borderColor: theme.palette.grey[500],
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
        width: "100%",
        maxWidth: 300,
        minWidth: 260,
        mx: "auto",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={`http://localhost:5500${props.img}`}
        alt="instructor"
        crossOrigin="anonymous"
        sx={{ borderRadius: 1, objectFit: "cover", width: "100%" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: theme.palette.text.secondary }}
        >
          {props.job}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary, mt: 1 }}
        >
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

Instructor.propTypes = {
  img: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Instructor;
