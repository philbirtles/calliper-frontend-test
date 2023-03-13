import { useQuery } from "react-query";
import { getCommentThreadById, postCreateThread } from "../../../api";
import { useAppState } from "../../../context";
import { useCallback } from "react";
import { postRespondToThread } from "../../../api/postRespondToThread";

export const useThreadDisplayState = () => {
  const { selectedDataPoint } = useAppState();

  const { data } = useQuery(selectedDataPoint?.threadId ?? "", () =>
    getCommentThreadById(selectedDataPoint?.threadId)
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
      } else {
        await postCreateThread({
          data_point: {
            feature,
            country,
          },
          comment: {
            user_name: "Anonymous",
            text,
          },
        });
      }
    },
    [selectedDataPoint]
  );

  return {
    data,
    open: true,
    createMessage,
  };
};
