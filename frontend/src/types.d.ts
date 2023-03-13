type ChartDataFeature =
  | "hotdog"
  | "burger"
  | "sandwich"
  | "kebab"
  | "fries"
  | "donut";

type Country = "FR" | "GB" | "BE" | "DE" | "ES" | "IT";

type ChartDataPoint = {
  feature: ChartDataFeature;
  country: Country;
};

type ChartDataPointThread = ChartDataPoint & {
  threadId?: string;
};

type CommentThread = {
  id: string;
  comments_count: number;
  chart_data_point: ChartDataPoint[];
};

type CommentItem = {
  userName: string;
  text: string;
};

type SentCommentItem = {
  user_name: string;
  text: string;
};

type ChartDataResponse = {
  country: Country;
  [key: ChartDataFeature]: number;
}[];

type CommentThreadsResponse = CommentThread[];

type CommentThreadResponse = CommentThread & {
  comments: CommentItem[];
};

type CreateThreadRequest = {
  comment: SentCommentItem;
  data_point: ChartDataPoint;
};

type RespondToCommentThreadRequest = {
  comment: CommentItem;
};

type ShareResponse = {
  token: string;
};
