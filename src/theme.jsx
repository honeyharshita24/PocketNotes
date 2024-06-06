import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // Change the default font family
    fontFamily: "Roboto, sans-serif",

    // Modify specific variants
    h1: {
      fontSize: "35px",
      fontWeight: 500,
      color: "#263238",
    },
    h2: {
      fontSize: "24px",
      lineHeight: 1.5,
      fontWeight:500
    },
  },
});

export default theme;
