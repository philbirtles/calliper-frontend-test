import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import { getCommentThreadById, postCreateThread } from "../../../api";
import {
  setChartRefreshKey,
  setSelectedDataPoint,
  useAppState,
} from "../../../context";
import { useCallback } from "react";
import { postRespondToThread } from "../../../api/postRespondToThread";

export const useThreadDisplayState = () => {
  const { selectedDataPoint, dispatch, chartRefreshKey } = useAppState();

  const { data } = useQuery(
    selectedDataPoint?.threadId + chartRefreshKey ?? "",
    () => getCommentThreadById(selectedDataPoint?.threadId)
  );

  const createMessage = useCallback(
    async (text: string) => {
      if (!selectedDataPoint) return;
      const { threadId, feature, country } = selectedDataPoint;
      if (threadId) {
        await postRespondToThread(threadId, {
          user_name: "Anonymous",
          text,
        });
        dispatch?.(setChartRefreshKey(uuidv4()));
      } else {
        const { id, chartDataPoint } = await postCreateThread({
          data_point: {
            feature,
            country,
          },
          comment: {
            user_name: "Anonymous",
            text,
          },
        });

        dispatch?.(
          setSelectedDataPoint({
            threadId: id,
            feature: chartDataPoint.feature,
            country: chartDataPoint.country,
          })
        );
        dispatch?.(setChartRefreshKey(uuidv4()));
      }
    },
    [selectedDataPoint, dispatch]
  );

  return {
    data,
    createMessage,
    selectedDataPoint,
    dispatch,
  };
};
