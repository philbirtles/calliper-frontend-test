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
import { useCallback } from "react";
import { getChartData } from "../../api";
import { barChartProps, dataKeys } from "./chartConfig";
import { CommentLabel } from "./components";
import { useChartDisplayState } from "./hooks";
import { useChartInteractions } from "./hooks/useChartInteractions";
import Styles from "./styles.module.css";
import { Card } from "@mui/material";
import { getColour } from "../../utils";

export const ChartDisplay = () => {
  const { data } = useChartDisplayState("chartData", getChartData);
  const { onFeatureClick } = useChartInteractions();

  const renderBars = useCallback(() => {
    return dataKeys?.map((dataKey: ChartDataFeature) => {
      return (
        <Bar
          className={Styles.BarItem}
          key={dataKey}
          onClick={(data) => onFeatureClick(data, dataKey)}
          dataKey={dataKey}
          fill={getColour(dataKey)}
          filter={"drop-shadow(2px 2px 1px rgb(0 0 0 / 0.5))"}
        >
          <LabelList
            content={
              <CommentLabel
                fill={getColour(dataKey)}
                onClick={onFeatureClick}
              />
            }
            valueAccessor={({ country }: any) => {
              return { country, feature: dataKey };
            }}
          />
        </Bar>
      );
    });
  }, [onFeatureClick]);

  return (
    <Card sx={{ padding: 2 }}>
      <ResponsiveContainer height={600}>
        <BarChart {...barChartProps} data={data}>
          <YAxis />
          <Legend />
          <CartesianGrid vertical={false} />
          {renderBars()}
          <XAxis dataKey="country" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
