import { Drawer, Toolbar } from "@mui/material";

import { useThreadDisplayState } from "./hooks";

export const ThreadDisplay = () => {
  const { open, data: thread } = useThreadDisplayState();

  return (
    <Drawer open={open} anchor={"right"} variant="persistent">
      <Toolbar />
      {thread?.comments?.map((comment) => {
        return (
          <>
            <div key={comment.user_name + comment.text}>
              <div>{comment.user_name}</div>
              <div>{comment.text}</div>
            </div>
          </>
        );
      })}
    </Drawer>
  );
};
