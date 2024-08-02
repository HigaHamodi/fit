// src/App.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Error from "./error";
import Home from "./Pages/Home/home";
import Login from "./Pages/Auth/Login/login";
import Register from "./Pages/Auth/Register/register";
import Layout from "./Pages/Layout/layout";
import RestPass from "./Pages/Auth/ResetPass/resetPass";
import ChangePass from "./Pages/Auth/ResetPass/changePass";
import LayoutDash from "./dashboard/Layout/layout";
import HomeDash from "./dashboard/Home/home";
import CoursesDash from "./dashboard/Courses/courses";
import TeamDash from "./dashboard/Team/team";
import OrdersDash from "./dashboard/Orders/orders";
import UsersDash from "./dashboard/Users/users";

function App({ toggleTheme, isDarkMode }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
      >
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="dashboard" element={<LayoutDash />}>
        <Route
          index
          element={user?.isAdmin ? <HomeDash /> : <Navigate to="/" />}
        />
        <Route
          path="courses"
          element={user?.isAdmin ? <CoursesDash /> : <Navigate to="/" />}
        />
        <Route
          path="team"
          element={user?.isAdmin ? <TeamDash /> : <Navigate to="/" />}
        />
        <Route
          path="orders"
          element={user?.isAdmin ? <OrdersDash /> : <Navigate to="/" />}
        />
        <Route
          path="users"
          element={user?.isAdmin ? <UsersDash /> : <Navigate to="/" />}
        />
      </Route>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/reset-password" element={<RestPass />} />
      <Route path="/change-password" element={<ChangePass />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

App.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default App;
