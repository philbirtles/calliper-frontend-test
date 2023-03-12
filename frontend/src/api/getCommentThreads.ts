import axios from "axios";
import { generateEndpointUri } from "../utils";

export const getCommentThreads = async () => {
  const endpointUri = generateEndpointUri("chart/comment_threads");
  const { data } = await axios.get(endpointUri);
  return data;
};
