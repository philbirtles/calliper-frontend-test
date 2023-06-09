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
import { CommentLabel, NoData, ShareButtons } from "./components";
import { useChartDisplayState, useChartInteractions } from "./hooks";
import Styles from "./styles.module.css";
import {
  Card,
  Stack,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getColour } from "../../utils";

export const ChartDisplay = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
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

  if (!data || data.length < 0) {
    return <NoData />;
  }

  return (
    <Box height={"100%"}>
      <Stack height={"100%"} data-testid="recharts-wrapper">
        <Stack
          direction="row"
          marginBottom={3}
          justifyContent={"space-between"}
          spacing={3}
        >
          <Typography variant={"h5"}>Foods by Country</Typography>
          <ShareButtons />
        </Stack>

        <Card sx={{ padding: 1, flexGrow: 1, minHeight: 0 }}>
          <ResponsiveContainer minHeight={"400px"}>
            <BarChart
              {...barChartProps}
              data={data}
              barCategoryGap={isSmallScreen ? 6 : 12}
              barGap={isSmallScreen ? 0 : 6}
            >
              <YAxis />
              <Legend />
              <CartesianGrid vertical={false} />
              {renderBars()}
              <XAxis dataKey="country" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Stack>
    </Box>
  );
};
