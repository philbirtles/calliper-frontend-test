import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";
import { CalliperLogo } from "./CalliperLogo";

export const ApplicationBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            <CalliperLogo />
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
