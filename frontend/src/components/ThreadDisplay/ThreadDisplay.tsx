import { Stack, Paper, Box, Typography } from "@mui/material";
import { CommentCard, CommentForm } from "./components";

import { useThreadDisplayState } from "./hooks";

export const ThreadDisplay = () => {
  const {
    data: thread,
    createMessage,
    selectedDataPoint,
  } = useThreadDisplayState();

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
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              height: "100%",
              padding: 2,
              boxSizing: "border-box",
              flexGrow: 1,
              overflow: "auto",
            }}
          >
            {(!thread?.comments || thread.comments.length <= 0) && (
              <Typography textAlign="center">
                Be the first to say something about this.
              </Typography>
            )}
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
          {selectedDataPoint && (
            <CommentForm
              selectedDataPoint={selectedDataPoint}
              onSubmit={createMessage}
            />
          )}
        </Stack>
      </Paper>
    </Box>
  );
};
