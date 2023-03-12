import axios from "axios";
import { generateEndpointUri } from "../utils";

export const getShareToken = async () => {
  const endpointUri = generateEndpointUri("share");
  const { data } = await axios.get(endpointUri);
  return data;
};
