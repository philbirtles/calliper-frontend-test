import { Stack } from "@mui/material";
import { useThreadDisplayState } from "../../hooks";
import {
  CommentCard,
  CommentForm,
  NoMessages,
  ThreadTitle,
} from "./components";

export interface ThreadContentProps {
  isLoading?: boolean;
}

export const ThreadContent = ({ isLoading }: ThreadContentProps) => {
  const {
    data: thread,
    createMessage,
    selectedDataPoint,
  } = useThreadDisplayState();

  return (
    <>
      <ThreadTitle />
      <Stack
        spacing={1}
        data-testid="thread-content"
        sx={{
          width: "100%",
          height: "100%",
          padding: 1,
          paddingTop: 4,
          boxSizing: "border-box",
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {(!thread?.comments || thread.comments.length <= 0) && (
          <NoMessages isLoading={isLoading} />
        )}
        {thread?.comments?.map(({ userName, text }, index) => {
          return (
            <CommentCard
              isLoading={isLoading}
              key={userName + text + index}
              userName={userName}
              message={text}
            />
          );
        })}
      </Stack>
      <CommentForm
        selectedDataPoint={selectedDataPoint}
        onSubmit={createMessage}
      />
    </>
  );
};
