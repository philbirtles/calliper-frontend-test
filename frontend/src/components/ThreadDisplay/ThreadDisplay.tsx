import { Drawer, Toolbar } from "@mui/material";

import { useThreadDisplayState } from "./hooks";

export const ThreadDisplay = () => {
  const { open } = useThreadDisplayState();
  return (
    <Drawer open={open} anchor={"right"} variant="persistent">
      <Toolbar />
      <div>Hello</div>
    </Drawer>
  );
};
