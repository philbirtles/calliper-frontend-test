import { useQuery } from "react-query";
import { useCallback } from "react";
import { getCommentThreads } from "../../../api";

import { setSelectedDataPoint, useAppState } from "../../../context";
import { getThreadByFeature } from "../../../utils";

export const useChartInteractions = () => {
  const { dispatch } = useAppState();
  const { data: commentThreads } = useQuery(
    "commentThreads",
    getCommentThreads
  );

  const onFeatureClick = useCallback(
    (data: Record<string, string>, dataKey: string) => {
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
    },
    [commentThreads, dispatch]
  );

  return {
    onFeatureClick,
  };
};
