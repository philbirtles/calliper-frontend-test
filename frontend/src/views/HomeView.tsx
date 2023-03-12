import { ChartDisplay } from "../components";
import { ThreadDisplay } from "../components/ThreadDisplay";
import { PageLayout } from "../layouts";

export const HomeView = () => {
  return (
    <PageLayout>
      <>
        <ChartDisplay />
        <ThreadDisplay />
      </>
    </PageLayout>
  );
};
