import { useQuery } from "react-query";
import { getCommentThreads } from "../../../api";

import { setSelectedDataPoint, useAppState } from "../../../context";
import { getThreadByFeature } from "../../../utils";

export const useChartInteractions = () => {
  const { dispatch } = useAppState();
  const { data: commentThreads } = useQuery(
    "commentThreads",
    getCommentThreads
  );

  const onFeatureClick = (data: Record<string, string>, dataKey: string) => {
    const matchingThread = getThreadByFeature(
      commentThreads,
      dataKey,
      data.country
    );
    dispatch?.(
      setSelectedDataPoint({
        threadId: matchingThread?.id,
        feature: dataKey as ChartDataFeature,
        country: data.country as Country,
      })
    );
  };

  return {
    onFeatureClick,
  };
};
