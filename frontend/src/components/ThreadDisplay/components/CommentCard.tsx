import { Card, Typography, Avatar, Stack, Box } from "@mui/material";

export interface CommentCardProps {
  userName?: string;
  message: string;
}

export const CommentCard = ({ userName, message }: CommentCardProps) => {
  return (
    <Stack direction="row" sx={{ width: "100%" }} alignItems="end" spacing={1}>
      <Avatar
        sx={{
          backgroundColor: "primary.main",
          border: "2px solid",
          borderColor: "background.paper",
        }}
      >
        {userName?.[0]}
      </Avatar>
      <Box width="100%">
        <Card
          elevation={3}
          sx={{
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "background.threadBorder",
            marginBottom: 2,
            paddingY: 1,
            paddingX: 2,
            flexGrow: 1,
            borderRadius: "16px 16px 16px 0px",
          }}
        >
          <Stack>
            <Typography
              color={"text.secondary"}
              variant="subtitle2"
              fontSize={12}
            >
              {userName}
            </Typography>
            <Typography paddingX={1} variant="subtitle1" fontSize={12}>
              {message}
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
};
