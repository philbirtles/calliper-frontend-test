import { Card, Typography } from "@mui/material";

export const NoData = () => {
  return (
    <Card sx={{ padding: 5 }} data-testid="no-data-card">
      <Typography textAlign="center" variant="h5">
        No Data!
      </Typography>
    </Card>
  );
};
