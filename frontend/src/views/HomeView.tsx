import { Grid } from "@mui/material";
import { ChartDisplay } from "../components";
import { ThreadDisplay } from "../components/ThreadDisplay";
import { PageLayout } from "../layouts";

export const HomeView = () => {
  return (
    <PageLayout>
      <Grid height="100%" spacing={3} container>
        <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
          <ChartDisplay />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
          <ThreadDisplay />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
