import Box from "@mui/material/Box";

export interface ContentWindowProps {
  children: React.ReactNode;
}

export const ContentWindow = ({ children }: ContentWindowProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        backgroundColor: "background.default",
        position: "relative",
        display: "flex",
        padding: 3,
        boxSizing: "border-box",
      }}
    >
      {children}
    </Box>
  );
};
