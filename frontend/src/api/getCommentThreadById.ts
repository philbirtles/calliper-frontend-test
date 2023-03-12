import axios from "axios";
import { generateEndpointUri } from "../utils";

export const getCommentThreadById = async (id?: string) => {
  if (!id) return [];
  const endpointUri = generateEndpointUri(`chart/comment_threads/${id}`);
  const { data } = await axios.get(endpointUri);

  return data;
};
