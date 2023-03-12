import { useQuery } from "react-query";
import { useMemo } from "react";

export const useChartDisplayState = (
  queryKey: string,
  queryFunction: () => Promise<any[]>
) => {
  const { data } = useQuery(queryKey, queryFunction);

  const dataKeys = useMemo(() => {
    const _dataKeys = Array.from(
      new Set(data?.map((item: any) => Object.keys(item)).flat())
    )
      .filter((item) => item !== "country")
      .sort()
      .reverse() as ChartDataFeature[];

    return _dataKeys;
  }, [data]);

  return {
    data,
    dataKeys,
  };
};
