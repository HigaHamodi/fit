// Theme configuration
import { createTheme } from "@mui/material/styles";

// Light Theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#588b8b", // Dark Cyan
      light: "#88c2c2", // Lighter shade of Dark Cyan
      dark: "#2c5f5f", // Darker shade of Dark Cyan
      contrastText: "#ffffff", // White
    },
    secondary: {
      main: "#ffd5c2", // Apricot
      light: "#ffe8dc", // Lighter shade of Apricot
      dark: "#ccac99", // Darker shade of Apricot
      contrastText: "#588b8b", // Dark Cyan
    },
    error: {
      main: "#c8553d", // Jasper
      light: "#e0897e", // Lighter shade of Jasper
      dark: "#8e2b23", // Darker shade of Jasper
      contrastText: "#ffffff", // White
    },
    warning: {
      main: "#f28f3b", // Tangerine
      light: "#f6b067", // Lighter shade of Tangerine
      dark: "#ba621e", // Darker shade of Tangerine
      contrastText: "#ffffff", // White
    },
    info: {
      main: "#88c2c2", // Light shade of Dark Cyan
      light: "#b4e0e0", // Lighter shade
      dark: "#5a9b9b", // Darker shade
      contrastText: "#ffffff", // White
    },
    success: {
      main: "#8bc34a", // Green (retained from previous theme)
      light: "#aed581", // Light Green
      dark: "#689f38", // Dark Green
      contrastText: "#ffffff", // White
    },
    background: {
      default: "#f0f4f8", // Light Grey
      paper: "rgba(88, 139, 139, 0.08)", // Slightly transparent paper
    },
    text: {
      primary: "#1c313a", // Dark Blue
      secondary: "#757575", // Grey
    },
    divider: "#588b8b", // Dark Cyan
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#588b8b", // Dark Cyan
      light: "#88c2c2", // Lighter shade of Dark Cyan
      dark: "#2c5f5f", // Darker shade of Dark Cyan
      contrastText: "#ffffff", // White
    },
    secondary: {
      main: "#ffd5c2", // Apricot
      light: "#ffe8dc", // Lighter shade of Apricot
      dark: "#ccac99", // Darker shade of Apricot
      contrastText: "#588b8b", // Dark Cyan
    },
    error: {
      main: "#c8553d", // Jasper
      light: "#e0897e", // Lighter shade of Jasper
      dark: "#8e2b23", // Darker shade of Jasper
      contrastText: "#ffffff", // White
    },
    warning: {
      main: "#f28f3b", // Tangerine
      light: "#f6b067", // Lighter shade of Tangerine
      dark: "#ba621e", // Darker shade of Tangerine
      contrastText: "#ffffff", // White
    },
    info: {
      main: "#88c2c2", // Light shade of Dark Cyan
      light: "#b4e0e0", // Lighter shade
      dark: "#5a9b9b", // Darker shade
      contrastText: "#ffffff", // White
    },
    success: {
      main: "#8bc34a", // Green (retained from previous theme)
      light: "#aed581", // Light Green
      dark: "#689f38", // Dark Green
      contrastText: "#ffffff", // White
    },
    background: {
      default: "#121212", // Very Dark Grey
      paper: "rgba(88, 139, 139, 0.08)", // Slightly transparent paper
    },
    text: {
      primary: "#ffffff", // White
      secondary: "#a5a5a5", // Light Grey
      disabled: "#666666", // Grey
    },
  },
});

export { lightTheme, darkTheme };
