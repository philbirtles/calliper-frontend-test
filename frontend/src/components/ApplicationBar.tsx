import { AppBar, Button, Toolbar } from "@mui/material";
import { CalliperLogo } from "./CalliperLogo";

export const ApplicationBar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Button color="inherit">
            <CalliperLogo />
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
