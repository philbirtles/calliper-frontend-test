import { AppBar, Button, Toolbar } from "@mui/material";
import { CalliperLogo } from "./CalliperLogo";

export const ApplicationBar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Button color="inherit">
          <CalliperLogo />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
