import { Fade, Stack, Typography } from "@mui/material";
export interface NoMessagesProps {
  isLoading?: boolean;
}

export const NoMessages = ({ isLoading }: NoMessagesProps) => {
  return (
    <Fade in={!isLoading}>
      <Stack
        data-testid="no-messages"
        alignItems="center"
        spacing={2}
        height="100%"
        justifyContent="center"
        sx={{ opacity: 0.65 }}
      >
        <Typography color="primary" variant="h5">
          No Conversation.
        </Typography>
        <Typography textAlign="center">
          No one has commented on this yet - Be the first to say something.
        </Typography>
      </Stack>
    </Fade>
  );
};
