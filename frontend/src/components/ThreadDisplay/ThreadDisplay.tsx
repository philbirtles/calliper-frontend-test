import { Stack, Paper } from "@mui/material";
import { CommentCard, CommentForm } from "./components";

import { useThreadDisplayState } from "./hooks";

export const ThreadDisplay = () => {
  const { data: thread, createMessage } = useThreadDisplayState();

  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Stack width="100%" height="100%" justifyContent="space-between">
        <Stack spacing={2} sx={{ padding: 2 }}>
          {thread?.comments?.map(({ userName, text }, index) => {
            return (
              <CommentCard
                key={userName + text + index}
                userName={userName}
                message={text}
              />
            );
          })}
        </Stack>
        <CommentForm onSubmit={createMessage} />
      </Stack>
    </Paper>
  );
};
