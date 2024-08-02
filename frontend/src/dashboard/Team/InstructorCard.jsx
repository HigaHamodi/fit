import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import request from "../../utils/request";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";

const defaultImage = "/path/to/default/image.jpg"; // Set the path to your default image

const InstructorCard = (props) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleDelete = async () => {
    try {
      await request.delete(`/api/instructors/${props.engId}`, {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      });
      toast.success("המדריך נמחק בהצלחה");
      setIsOpen(false);
      props.fetchInstructors(); // Fetch the updated list of instructors
    } catch (error) {
      console.error("Error deleting instructor:", error); // Log the error
      toast.error("שגיאה במחיקת המדריך");
    }
  };

  return (
    <Fragment>
      <Card sx={{ bgcolor: theme.palette.background.paper }}>
        <CardMedia
          component="img"
          height="200"
          image={`http://localhost:5500${props.img}`} // Use backend URL to construct the image URL
          alt={`Image of ${props.name}`}
          crossOrigin="anonymous"
          onError={(e) => (e.target.src = defaultImage)} // Set default image on error
        />
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.job}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={openModal}
            variant="contained"
            color="error"
            fullWidth
            sx={{
              bgcolor: theme.palette.error.main,
              "&:hover": { bgcolor: theme.palette.error.dark },
            }}
          >
            מחיקת המדריך
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[5],
            borderRadius: 2,
            p: 2,
          },
        }}
      >
        <DialogTitle
          sx={{ borderBottom: `1px solid ${theme.palette.divider}`, mb: 2 }}
        >
          האם אתה בטוח?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            האם אתה בטוח שברצונך למחוק את המדריך? לא תוכל לשחזר אותו לאחר
            המחיקה.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            onClick={closeModal}
            color="secondary"
            variant="contained"
            sx={{ mr: 1 }}
          >
            ביטול
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            fullWidth
          >
            מחיקת המדריך
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Fragment>
  );
};

InstructorCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  engId: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  fetchInstructors: PropTypes.func.isRequired, // Ensure this prop is passed
};

export default InstructorCard;
