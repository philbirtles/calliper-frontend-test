import { useQuery } from "react-query";
import { getCommentThreadById } from "../../../api";
import { useAppState } from "../../../context";

export const useThreadDisplayState = () => {
  const { selectedThreadId } = useAppState();

  const { data } = useQuery("selectedThread", () =>
    getCommentThreadById(selectedThreadId)
  );
  return {
    data,
    open: true,
  };
};
