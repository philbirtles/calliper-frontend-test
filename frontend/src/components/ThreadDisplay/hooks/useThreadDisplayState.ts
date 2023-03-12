import { useQuery } from "react-query";
import { getCommentThreadById } from "../../../api";

export const useThreadDisplayState = () => {
  const { data } = useQuery("selectedThread", () =>
    getCommentThreadById("1234")
  );
  return {
    open: true,
  };
};
