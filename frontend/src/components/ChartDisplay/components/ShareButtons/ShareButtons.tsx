import Share from "@mui/icons-material/Share";
import Copy from "@mui/icons-material/CopyAll";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { getShareToken } from "../../../../api";

export const ShareButtons = () => {
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [hasCopied, setHasCopied] = useState(false);

  const onCopyLinkClick = async () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const data = await getShareToken();
    navigator.clipboard.writeText(`http://localhost:3000/share/${data.token}`);
    setHasCopied(true);
    setIntervalId(setInterval(() => setHasCopied(false), 4000));
  };

  const onShareClick = async () => {
    const data = await getShareToken();
    navigator.share({
      title: "Demo Chart",
      text: "Take a look at this chart on Calliper",
      url: `http://localhost:3000/share/${data.token}`,
    });
  };

  return (
    <Stack direction="row" spacing={3}>
      <Button
        onClick={onCopyLinkClick}
        color={hasCopied ? "success" : "primary"}
        startIcon={hasCopied ? <CheckCircle /> : <Copy />}
        variant="outlined"
      >
        {hasCopied ? "Copied!" : "Copy Link"}
      </Button>
      <Button variant="contained" onClick={onShareClick} startIcon={<Share />}>
        Share Link
      </Button>
    </Stack>
  );
};
