import { Grid } from "@mui/material";
import { ChartDisplay } from "../components";
import { ThreadDisplay } from "../components/ThreadDisplay";
import { PageLayout } from "../layouts";

export const HomeView = () => {
  return (
    <PageLayout>
      <Grid height="100%" spacing={3} container>
        <Grid item xs={12} md={9}>
          <ChartDisplay />
        </Grid>
        <Grid item xs={12} md={3}>
          <ThreadDisplay />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
