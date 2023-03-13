import axios from "axios";
import { generateEndpointUri } from "../utils";

export const postRespondToThread = async (
  threadId: string,
  comment: SentCommentItem
) => {
  const endpointUri = generateEndpointUri(
    `chart/comment_threads/${threadId}/respond`
  );

  const { data } = await axios.post(endpointUri, {
    comment: comment,
  });
  return data;
};
