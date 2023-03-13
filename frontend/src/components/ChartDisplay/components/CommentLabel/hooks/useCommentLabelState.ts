import { useMemo } from "react";
import { useQuery } from "react-query";
import { getCommentThreads } from "../../../../../api";
import { getThreadByFeature } from "../../../../../utils";
import { CommentLabelProps } from "../CommentLabel";

const iconSize = 34;

export const useCommentLabelState = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  value,
  isStack = false,
}: CommentLabelProps) => {
  const { feature, country } = value ?? {};

  const { data: commentThreads } = useQuery(
    "commentThreads",
    getCommentThreads
  );

  const comments = useMemo(() => {
    if (feature && country && commentThreads) {
      return getThreadByFeature(commentThreads, feature, country);
    }
    return [];
  }, [country, feature, commentThreads]);

  const xOffset = useMemo(() => {
    if (isStack) {
      return x + width;
    }
    return x + width / 2;
  }, [isStack, x, width]);

  const yOffset = useMemo(() => {
    if (isStack) {
      return y + height / 2 - iconSize;
    }
    return y - iconSize;
  }, [isStack, y, height]);

  return {
    comments,
    xOffset,
    yOffset,
    iconSize,
  };
};
