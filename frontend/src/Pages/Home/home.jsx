import { Box } from "@mui/material";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Message from "./components/message";
import Team from "./components/Team/team";
import Courses from "./components/Courses/courses";
import Contacts from "./components/Contacts.jsx";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Services />
      <About />
      <Courses />
      <Message />
      <Team />
      <Contacts />
    </Box>
  );
};

export default Home;
