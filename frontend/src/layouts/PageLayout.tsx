import { ApplicationBar, ContentWindow } from "../components";
import { Box } from "@mui/material";
export interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ApplicationBar />
      <ContentWindow>{children}</ContentWindow>
    </Box>
  );
};
