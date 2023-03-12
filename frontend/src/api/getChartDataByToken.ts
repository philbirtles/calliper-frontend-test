import axios from "axios";
import { generateEndpointUri } from "../utils";

export const getChartDataByToken = async (token: string) => {
  const endpointUri = generateEndpointUri(`chart/shared/${token}`);
  const data = await axios.get(endpointUri);
  return data;
};
