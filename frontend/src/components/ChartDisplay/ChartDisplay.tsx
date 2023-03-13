import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getChartData } from "../../api";
import { barChartProps } from "./chartConfig";
import { useChartDisplayState } from "./hooks";
import { useChartInteractions } from "./hooks/useChartInteractions";

export const ChartDisplay = () => {
  const { data, dataKeys } = useChartDisplayState("chartData", getChartData);
  const { onFeatureClick } = useChartInteractions();
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart {...barChartProps} data={data}>
        <XAxis dataKey="country" />
        <YAxis />
        <Legend />
        <CartesianGrid vertical={false} />
        {dataKeys?.map((dataKey: ChartDataFeature) => {
          return (
            <Bar
              key={dataKey}
              onClick={(data) => onFeatureClick(data, dataKey)}
              dataKey={dataKey}
            ></Bar>
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};
