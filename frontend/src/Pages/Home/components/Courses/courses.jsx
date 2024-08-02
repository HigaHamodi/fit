import { useEffect, useState } from "react";
import Post from "./post";
import { ToastContainer } from "react-toastify";
import request from "../../../../utils/request";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

const Articles = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  const fetchData = async () => {
    try {
      const response = await request.get("/api/courses");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      component="header"
      id="courses"
      sx={{
        bgcolor: "background.default",
        mx: "auto",
        borderY: 2,
        pt: 5,
        pb: 14,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            my: 3,
            color: "text.primary",
            textAlign: { xs: "center", md: "left" }, // Center on small screens, left align on medium and larger screens
          }}
        >
          קורסים באקדמיה
        </Typography>
        <Box>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="300px"
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Grid container spacing={4}>
                {paginatedData.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post._id}>
                    <Post
                      title={post.title}
                      courseId={post._id}
                      thumb={
                        post.thumbnail.startsWith("http")
                          ? post.thumbnail
                          : `http://localhost:5500${post.thumbnail}`
                      } // Ensure correct URL
                    />
                  </Grid>
                ))}
              </Grid>
              <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                  count={Math.ceil(data.length / itemsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            </>
          )}
        </Box>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default Articles;
