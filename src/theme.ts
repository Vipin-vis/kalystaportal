// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d4af37", // gold
    },
    secondary: {
      main: "#b8860b",
    },
    background: {
      default: "#05060a",
      paper: "#111217",
    },
    text: {
      primary: "#f9f9f9",
      secondary: "#c5c5c5",
    },
  },
  typography: {
    fontFamily: '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      letterSpacing: "0.08em",
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      letterSpacing: "0.06em",
    },
    button: {
      textTransform: "none",
      letterSpacing: "0.08em",
    },
  },
  shape: {
    borderRadius: 18,
  },
});

export default theme;
