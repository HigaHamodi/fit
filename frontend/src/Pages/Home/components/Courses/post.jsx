import PropTypes from "prop-types";
import swal from "sweetalert";
import request from "../../../../utils/request";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Post = (props) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();

  const imageUrl = props.thumb.startsWith("http")
    ? props.thumb
    : `/images${props.thumb}`;

  const showAlert = () => {
    swal({
      title: "האם אתה בטוח שברצונך להירשם לקורס?",
      buttons: ["ביטול", "הירשם"],
    }).then(async (value) => {
      if (value) {
        swal({
          title: "בקשת ההרשמה נשלחה",
          icon: "success",
        });
        await request.post("/api/orders", {
          course: props.courseId,
          user: user?._id,
        });
      }
    });
  };

  const showAlertReg = () => {
    swal({
      title: "עליך להירשם תחילה כדי לבקש הרשמה",
      buttons: ["ביטול", "הירשם"],
    }).then((value) => {
      if (value) {
        navigate("/login");
      }
    });
  };

  return (
    <Card
      sx={{
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: theme.palette.background.paper,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={imageUrl}
        alt={props.title}
        crossOrigin="anonymous"
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            color={theme.palette.text.primary}
            sx={{
              textAlign: { xs: "center", md: "left" }, // Center on small screens, left align on medium and larger screens
            }}
          >
            {props.title}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={user ? showAlert : showAlertReg}
          fullWidth
          sx={{
            mt: 2,
            borderRadius: "8px",
          }}
        >
          הירשם עכשיו
        </Button>
      </CardContent>
    </Card>
  );
};

Post.propTypes = {
  courseId: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
