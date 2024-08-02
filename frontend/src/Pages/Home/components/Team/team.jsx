import { useEffect, useState } from "react";
import Instructor from "./Instructor";
import request from "../../../../utils/request";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const NextArrow = ({ className, onClick }) => {
  const theme = useTheme();
  return (
    <Box
      className={className}
      sx={{
        color: theme.palette.primary.main,
        "&::before": {
          color: theme.palette.primary.main,
        },
      }}
      onClick={onClick}
    />
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const PrevArrow = ({ className, onClick }) => {
  const theme = useTheme();
  return (
    <Box
      className={className}
      sx={{
        color: theme.palette.primary.main,
        "&::before": {
          color: theme.palette.primary.main,
        },
      }}
      onClick={onClick}
    />
  );
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const Team = () => {
  const [data, setData] = useState([]);
  const theme = useTheme();

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box id="team" sx={{ bgcolor: theme.palette.background.default, py: 5 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            my: 3,
            textAlign: "center",
          }}
        >
          צוות המדריכים
        </Typography>
        <Box
          className="slider-container"
          sx={{ "& .slick-slide": { padding: 2 } }}
        >
          <Slider {...settings}>
            {data.length ? (
              data.map((instructor) => (
                <Box key={instructor._id} px={2}>
                  <Instructor
                    name={instructor.name}
                    job={instructor.job}
                    img={instructor.image}
                  />
                </Box>
              ))
            ) : (
              <Typography
                variant="h6"
                component="div"
                sx={{ textAlign: "center" }}
              >
                טוען את המדריכים...
              </Typography>
            )}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
