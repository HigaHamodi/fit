import { useState } from "react";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default Main;
