import { Box, LinearProgress, Stack } from "@mui/material";
import { PageLayout } from "../layouts";

export const LoadingView = () => {
  return (
    <PageLayout>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box width={"200px"}>
          <LinearProgress />
        </Box>
      </Stack>
    </PageLayout>
  );
};
