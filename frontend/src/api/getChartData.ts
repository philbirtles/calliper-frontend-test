import axios from "axios";
import { generateEndpointUri } from "../utils";

export const getChartData = async () => {
  const endpointUri = generateEndpointUri("chart/data");
  const { data } = await axios.get(endpointUri);
  return data;
};
