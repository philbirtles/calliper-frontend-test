export const getThreadByFeature = (
  threadList: any[],
  feature: string,
  country: string
) => {
  return threadList.find((thread: any) => {
    return (
      thread.chartDataPoint.feature === feature &&
      thread.chartDataPoint.country === country
    );
  });
};
