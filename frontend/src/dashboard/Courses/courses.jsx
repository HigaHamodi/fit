import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import request from "../../utils/request";
import Post from "./post";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  Typography,
  useTheme,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const Courses = () => {
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [instructor, setInstructor] = useState("");
  const [open, setOpen] = useState(false);

  const fetchCourses = async () => {
    try {
      const { data } = await request.get("/api/courses");
      setData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const addCourseHandler = async () => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      instructor.trim() === ""
    ) {
      toast.error("בבקשה למלא כל השדות");
      return;
    }
    const courseData = {
      title,
      description,
      thumbnail: thumbnail || undefined, // Set to undefined if empty
      instructor,
    };
    console.log("Sending course data:", courseData); // Debugging log
    try {
      await request.post("/api/courses", courseData, {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      });
      fetchCourses();
      setOpen(false);
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("שגיאה בהוספת הקורס");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Box
      sx={{
        p: 5,
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}
    >
      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4">קורסים</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
          sx={{
            bgcolor: theme.palette.primary.main,
            "&:hover": { bgcolor: theme.palette.primary.dark },
          }}
        >
          הוסף קורס
        </Button>
      </Box>

      <Grid container spacing={4}>
        {data.map((course) => (
          <Grid item xs={12} md={6} lg={4} key={course._id}>
            <Post
              title={course.title}
              dipId={course._id}
              img={course.thumbnail}
              fetchCourses={fetchCourses} // Pass fetchCourses as a prop
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      >
        <DialogTitle>הוסף קורס חדש</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="שם הקורס"
              fullWidth
              sx={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                p: 1,
              }}
            />
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="תיאור"
              fullWidth
              sx={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                p: 1,
              }}
            />
            <Input
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder="קישור לתמונה (אופציונלי)"
              fullWidth
              sx={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                p: 1,
              }}
            />
            <Input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              placeholder="שם המדריך"
              fullWidth
              sx={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                p: 1,
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={addCourseHandler}
            sx={{
              bgcolor: theme.palette.primary.main,
              "&:hover": { bgcolor: theme.palette.primary.dark },
            }}
            variant="contained"
            fullWidth
          >
            הוסף קורס
          </Button>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              bgcolor: theme.palette.secondary.main,
              "&:hover": { bgcolor: theme.palette.secondary.dark },
            }}
            variant="contained"
            fullWidth
          >
            ביטול
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Box>
  );
};

export default Courses;
