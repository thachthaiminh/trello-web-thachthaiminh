import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { deepOrange, orange, teal } from "@mui/material/colors";

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: teal,
        secondary: orange,
      },
    },
  },
  // ...other properties
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "#16a085",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          "& fieldset": { borderWidth: "1px !important" },
        }),
      },
    },
  },
});

export default theme;
