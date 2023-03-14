import { Card, Stack, Typography, IconButton } from "@mui/material";
import Close from "@mui/icons-material/Close";

import { setSelectedDataPoint, useAppState } from "../../../../../context";

export const ThreadTitle = () => {
  const { selectedDataPoint, dispatch } = useAppState();
  return (
    <Card
      data-testid="thread-title"
      sx={{ overflow: "unset", padding: 1, zIndex: 1 }}
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          fontWeight={600}
          textTransform={"capitalize"}
          sx={{ marginLeft: 1 }}
        >{`${selectedDataPoint?.country} - ${selectedDataPoint?.feature}`}</Typography>
        <IconButton onClick={() => dispatch?.(setSelectedDataPoint())}>
          <Close />
        </IconButton>
      </Stack>
    </Card>
  );
};
