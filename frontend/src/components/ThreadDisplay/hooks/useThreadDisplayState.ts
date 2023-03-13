import { useQuery } from "react-query";
import { getCommentThreadById } from "../../../api";
import { useAppState } from "../../../context";

export const useThreadDisplayState = () => {
  const { selectedDataPoint } = useAppState();

  const { data } = useQuery(selectedDataPoint?.threadId ?? "", () =>
    getCommentThreadById(selectedDataPoint?.threadId)
  );

  return {
    data,
    open: true,
  };
};
