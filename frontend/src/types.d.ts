type ChartDataFeature =
  | "hotdog"
  | "burger"
  | "sandwitch"
  | "kebab"
  | "fries"
  | "donut";

type Country = "FR" | "GB" | "BE" | "DE" | "ES" | "IT";

type ChartDataPoint = {
  feature: ChartDataFeature;
  country: Country;
};

type CommentThread = {
  id: string;
  comments_count: number;
  chart_data_point: ChartDataPoint[];
};

type Comment = {
  user_name: string;
  text: string;
};

type ChartDataResponse = {
  country: Country;
  [key: ChartDataFeature]: number;
}[];

type CommentThreadsResponse = CommentThread[];

type CommentThreadResponse = CommentThread & {
  comments: Comment[];
};

type CreateThreadRequest = {
  comment: Comment;
  data_point: ChartDataPoint;
};

type RespondToCommentThreadRequest = {
  comment: Comment;
};

type ShareResponse = {
  token: string;
};
