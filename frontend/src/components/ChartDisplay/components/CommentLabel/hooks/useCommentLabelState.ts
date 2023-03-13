import { useMemo } from "react";
import { useQuery } from "react-query";
import { getCommentThreads } from "../../../../../api";
import { useAppState } from "../../../../../context";
import { getThreadByFeature } from "../../../../../utils";
import { CommentLabelProps } from "../CommentLabel";

const iconSize = 34;

export const useCommentLabelState = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  value,
}: CommentLabelProps) => {
  const { feature, country } = value ?? {};
  const { chartRefreshKey } = useAppState();

  const { data: commentThreads, isLoading } = useQuery(
    chartRefreshKey,
    getCommentThreads
  );

  const comments = useMemo(() => {
    if (feature && country && commentThreads) {
      return getThreadByFeature(commentThreads, feature, country);
    }
    return [];
  }, [country, feature, commentThreads]);

  const xOffset = useMemo(() => {
    return x + width / 2 - 6;
  }, [x, width]);

  const yOffset = useMemo(() => {
    return y - iconSize;
  }, [y]);

  return {
    comments,
    xOffset,
    yOffset,
    iconSize,
    isLoading,
  };
};
