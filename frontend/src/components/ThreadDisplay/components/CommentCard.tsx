import { Card, Typography, Avatar, Stack, Box } from "@mui/material";

export interface CommentCardProps {
  userName?: string;
  message: string;
}

export const CommentCard = ({ userName, message }: CommentCardProps) => {
  return (
    <Stack direction="row" sx={{ width: "100%" }} alignItems="end" spacing={1}>
      <Avatar sx={{ backgroundColor: "primary.main" }}>{userName?.[0]}</Avatar>
      <Box width="100%">
        <Card
          elevation={2}
          sx={{
            marginBottom: 2,
            padding: 2,
            flexGrow: 1,
            borderRadius: "20px 20px 20px 0px",
          }}
        >
          <Stack spacing={1}>
            <Typography fontSize={14} fontWeight={700} variant={"body1"}>
              {userName}
            </Typography>
            <Typography variant="subtitle1" fontSize={14}>
              {message}
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
};
