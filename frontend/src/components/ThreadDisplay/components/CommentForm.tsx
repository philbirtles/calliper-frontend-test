import { Card, TextField, Button, Stack, Box } from "@mui/material";
import { useState } from "react";

export interface CommentFormProps {
  onSubmit: (message: string) => void;
}
export const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [inputText, setInputText] = useState("");

  return (
    <Card sx={{ padding: 1, overflow: "unset" }}>
      <Box>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(inputText);
          }}
        >
          <Stack spacing={1}>
            <TextField
              placeholder="Add a message..."
              onChange={(event) => setInputText(event.currentTarget.value)}
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ textTransform: "none" }}
            >
              Send Message
            </Button>
          </Stack>
        </form>
      </Box>
    </Card>
  );
};
