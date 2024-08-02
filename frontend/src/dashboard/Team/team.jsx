import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import request from "../../utils/request";
import InstructorCard from "./InstructorCard";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  useTheme,
  Pagination,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Team = () => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  const addEngHandler = async () => {
    if (name.trim() === "" || job.trim() === "" || url.trim() === "") {
      return toast.error("בבקשה למלא כל השדות");
    }
    const instructorData = {
      name: name,
      job: job,
      url: url,
    };
    console.log("Sending instructor data:", instructorData);
    try {
      await request.post("/api/instructors", instructorData, {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      });
      toast.success("המדריך נוסף בהצלחה");
      setName("");
      setJob("");
      setUrl("");
      setOpen(false);
      fetchData();
    } catch (error) {
      console.error("Error adding instructor:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("שגיאה בהוספת המדריך");
      }
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await request.get("/api/instructors");
      setData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      sx={{
        p: 5,
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color={theme.palette.text.primary}>
          צוות
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
          sx={{
            bgcolor: theme.palette.primary.main,
            "&:hover": { bgcolor: theme.palette.primary.dark },
          }}
        >
          הוסף מדריך
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: 5 }}>
        {paginatedData.map((eng) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={eng._id}>
            <InstructorCard
              name={eng.name}
              img={eng.image}
              engId={eng._id}
              job={eng.job}
              fetchInstructors={fetchData}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
          הוסף מדריך חדש
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
            <TextField
              label="שם המדריך"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              sx={{ bgcolor: theme.palette.background.paper }}
            />
            <TextField
              label="תפקיד"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              fullWidth
              margin="normal"
              sx={{ bgcolor: theme.palette.background.paper }}
            />
            <TextField
              label="קישור לתמונה"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              fullWidth
              margin="normal"
              sx={{ bgcolor: theme.palette.background.paper }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={addEngHandler}
            color="primary"
            variant="contained"
            fullWidth
            sx={{ fontWeight: "bold" }}
          >
            הוסף מדריך
          </Button>
          <Button
            onClick={() => setOpen(false)}
            color="secondary"
            variant="contained"
            fullWidth
            sx={{ fontWeight: "bold" }}
          >
            ביטול
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Box>
  );
};

export default Team;
