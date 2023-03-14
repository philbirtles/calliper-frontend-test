import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    default: string;
    paper: string;
    thread: string;
    threadBorder: string;
  }
}

export const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: "#0C141C",
    },
    background: {
      default: "#F7F8FD",
      paper: "#FFFFFF",
      thread: "#dde5ef",
      threadBorder: "#bdc8d5",
    },
    text: {
      secondary: "#ABABAB",
    },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
  },
});
