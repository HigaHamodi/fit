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
  useTheme,
  Box,
  Typography,
  Slide,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const Post = ({ img, title, dipId, fetchCourses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleDelete = async () => {
    try {
      await request.delete(`/api/courses/${dipId}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      toast.success("הקורס נמחק בהצלחה");
      closeModal();
      fetchCourses(); // Fetch the updated list of courses
    } catch (error) {
      console.error("Error deleting course:", error); // Log the error
      toast.error("שגיאה במחיקת הקורס");
    }
  };

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5500";

  return (
    <Fragment>
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          border: `1px solid ${theme.palette.grey[800]}`,
          backgroundColor: theme.palette.background.paper,
          boxShadow: 1,
        }}
      >
        <Box
          component="img"
          src={`${backendUrl}/${img}`}
          alt="thumbnail"
          crossOrigin="anonymous"
          sx={{
            height: 200,
            width: "100%",
            borderRadius: 2,
            objectFit: "cover",
            objectPosition: "top",
            mb: 2,
          }}
        />
        <Typography variant="h5" color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          fullWidth
          onClick={openModal}
          sx={{ mt: 2 }}
        >
          מחק קורס
        </Button>
      </Box>

      <Dialog
        open={isOpen}
        TransitionComponent={Slide}
        keepMounted
        onClose={closeModal}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      >
        <DialogTitle>האם אתה בטוח?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            האם אתה בטוח שברצונך למחוק את הקורס? לא תוכל לשחזר אותו לאחר המחיקה.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            fullWidth
          >
            מחק קורס
          </Button>
          <Button
            onClick={closeModal}
            color="secondary"
            variant="contained"
            fullWidth
          >
            ביטול
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Fragment>
  );
};

Post.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dipId: PropTypes.string.isRequired,
  fetchCourses: PropTypes.func.isRequired, // Add fetchCourses prop
};

export default Post;
