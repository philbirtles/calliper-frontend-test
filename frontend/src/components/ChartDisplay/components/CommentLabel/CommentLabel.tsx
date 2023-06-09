import { useCommentLabelState } from "./hooks";

export interface CommentLabelProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  onClick?: (data: Record<string, string>, dataKey: string) => void;
  value?: { country: Country; feature: ChartDataFeature };
  fill: string;
}

export const CommentLabel = (props: CommentLabelProps) => {
  const { comments, iconSize, xOffset, yOffset, isLoading } =
    useCommentLabelState(props);
  const { country, feature } = props.value ?? {};
  if (!comments || comments.commentsCount <= 0) {
    return null;
  }

  if (isLoading) return null;

  return (
    <g
      filter={"drop-shadow(2px 2px 1px rgb(0 0 0 / 0.5))"}
      data-testid="comment-bubble"
      onClick={() => {
        if (!country || !feature) return;
        props.onClick?.({ country }, feature);
      }}
    >
      <svg
        fill={props.fill}
        x={xOffset}
        y={yOffset}
        height={iconSize}
        width={iconSize}
        viewBox="0 0 16 14"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14,3.5v6A1.5,1.5,0,0,1,12.5,11H8.75L3.5,14l.75-3H3.5A1.5,1.5,0,0,1,2,9.5v-6A1.5,1.5,0,0,1,3.5,2h9A1.5,1.5,0,0,1,14,3.5Z" />
      </svg>
      <text
        x={xOffset + iconSize / 2}
        y={yOffset + iconSize / 2}
        fill="#FFF"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {comments.commentsCount}
      </text>
    </g>
  );
};
