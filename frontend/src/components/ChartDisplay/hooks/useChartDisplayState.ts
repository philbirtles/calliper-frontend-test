import { useQuery } from "react-query";

export const useChartDisplayState = (
  queryKey: string,
  queryFunction: () => Promise<any[]>
) => {
  const { data } = useQuery(queryKey, queryFunction);

  return {
    data,
  };
};
