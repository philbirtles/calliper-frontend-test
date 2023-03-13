import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";

export interface CommentFormProps {
  onSubmit: (message: string) => void;
}
export const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [inputText, setInputText] = useState("");

  return (
    <Card>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(inputText);
        }}
      >
        <TextField
          onChange={(event) => setInputText(event.currentTarget.value)}
          multiline
          fullWidth
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};
