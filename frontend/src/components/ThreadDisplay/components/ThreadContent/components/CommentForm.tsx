import { Card, TextField, Button, Stack, Box } from "@mui/material";
import { useState, useEffect } from "react";

export interface CommentFormProps {
  selectedDataPoint?: ChartDataPointThread;
  onSubmit: (message: string) => void;
}
export const CommentForm = ({
  onSubmit,
  selectedDataPoint,
}: CommentFormProps) => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInputText("");
  }, [selectedDataPoint]);

  return (
    <Card data-testid="comment-form" sx={{ padding: 1, overflow: "unset" }}>
      <Box>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(inputText);
            setInputText("");
          }}
        >
          <Stack spacing={1}>
            <TextField
              required
              placeholder="Add a message..."
              onChange={(event) => setInputText(event.currentTarget.value)}
              fullWidth
              value={inputText}
            />
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </Stack>
        </form>
      </Box>
    </Card>
  );
};
