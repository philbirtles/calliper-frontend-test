import { Card, Typography, Avatar, Stack } from "@mui/material";

export interface CommentCardProps {
  userName?: string;
  message: string;
}

export const CommentCard = ({ userName, message }: CommentCardProps) => {
  return (
    <Card elevation={2} sx={{ padding: 1 }}>
      <Stack spacing={2}>
        <Stack direction={"row"} alignItems="center" spacing={2}>
          <Avatar>{userName?.[0]}</Avatar>
          <Typography variant="h6">{userName}</Typography>
        </Stack>
        <Typography>{message}</Typography>
      </Stack>
    </Card>
  );
};
