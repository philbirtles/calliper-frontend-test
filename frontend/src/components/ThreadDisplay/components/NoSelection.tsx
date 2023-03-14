import { Stack, Typography } from "@mui/material";

export const NoSelection = () => {
  return (
    <Stack
      alignItems="center"
      spacing={2}
      height="100%"
      justifyContent="center"
      sx={{ opacity: 0.65 }}
      data-testid="thread-no-selection"
    >
      <Typography color="primary" variant="h5">
        Nothing selected.
      </Typography>
      <Typography textAlign="center">
        Select a data point to create a new conversation, or view an existing
        one.
      </Typography>
    </Stack>
  );
};
