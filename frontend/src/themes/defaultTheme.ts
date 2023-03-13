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
    primary: {
      main: "#0C141C",
    },
    background: {
      default: "#F7F8FD",
      paper: "#FFFFFF",
      thread: "#dde5ef",
      threadBorder: "#bdc8d5",
    },
  },
});
