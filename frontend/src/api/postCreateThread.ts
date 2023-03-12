import axios from "axios";
import { generateEndpointUri } from "../utils";

export const postCreateThread = async ({
  data_point,
  comment,
}: CreateThreadRequest) => {
  const endpointUri = generateEndpointUri("chart/comment_threads");

  const { data } = await axios.post(endpointUri, {
    data_point,
    comment: comment,
  });
  return data;
};
