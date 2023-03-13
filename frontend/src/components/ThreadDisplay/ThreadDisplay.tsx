import { Drawer, Toolbar, Stack, Box, Card, Typography } from "@mui/material";
import { CommentForm } from "./components";

import { useThreadDisplayState } from "./hooks";

export const ThreadDisplay = () => {
  const { open, data: thread, createMessage } = useThreadDisplayState();

  return (
    <Drawer open={open} anchor={"right"} variant="persistent">
      <Toolbar />
      <Stack width="100%" height="100%" justifyContent="space-between">
        <Box>
          {thread?.comments?.map((comment) => {
            return (
              <>
                <Card key={comment.user_name + comment.text}>
                  <Typography>{comment.user_name}</Typography>
                  <Typography>{comment.text}</Typography>
                </Card>
              </>
            );
          })}
        </Box>
        <CommentForm onSubmit={createMessage} />
      </Stack>
    </Drawer>
  );
};
