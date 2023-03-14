import { Button, Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { PageLayout } from "../layouts";

export const ErrorView = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={5} sx={{ maxWidth: "500px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography variant="h4">Something went wrong.</Typography>
          </Stack>
          <Typography textAlign="center">
            You don't have access to this page, or it does not exist. Click the
            button below to return to the home page.
          </Typography>
          <Box textAlign="center">
            <Button variant="outlined" onClick={() => navigate("/")}>
              Go Home
            </Button>
          </Box>
        </Stack>
      </Stack>
    </PageLayout>
  );
};
