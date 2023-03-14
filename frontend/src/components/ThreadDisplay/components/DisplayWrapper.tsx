import { Box, Stack, Paper } from "@mui/material";

export interface DisplayWrapperProps {
  children: React.ReactNode;
}

export const DisplayWrapper = ({ children }: DisplayWrapperProps) => {
  return (
    <Box
      height="100%"
      width="100%"
      sx={{
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Paper
        sx={{
          border: "1px solid",
          display: "flex",
          borderColor: "background.threadBorder",
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "background.thread",
          background:
            "linear-gradient(202deg, #e7e8ee 0%, #e3eefa 35%, #ded9f5 100%)",
        }}
      >
        <Stack
          justifyContent="space-between"
          sx={{
            width: "100%",
            height: { sm: "auto", md: "calc(100vh - 120px)" },
            maxHeight: "calc(100vh - 120px)",
            boxSizing: "border-box",
          }}
        >
          {children}
        </Stack>
      </Paper>
    </Box>
  );
};
