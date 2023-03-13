import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getChartData } from "../../api";
import { barChartProps } from "./chartConfig";
import { CommentLabel } from "./components";
import { useChartDisplayState } from "./hooks";
import { useChartInteractions } from "./hooks/useChartInteractions";
import Styles from "./styles.module.css";

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
              className={Styles.BarItem}
              key={dataKey}
              onClick={(data) => onFeatureClick(data, dataKey)}
              dataKey={dataKey}
            >
              <LabelList
                content={
                  <CommentLabel isStack={false} onClick={onFeatureClick} />
                }
                valueAccessor={({ country }: any) => {
                  return { country, feature: dataKey };
                }}
              />
            </Bar>
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};
