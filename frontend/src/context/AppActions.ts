export interface IAction {
  type: string;
  payload?: any;
}

export const SET_SELECTED_DATA_POINT = "SET_SELECTED_DATA_POINT";
export const setSelectedDataPoint = (dataPoint?: ChartDataPointThread) => {
  return {
    type: SET_SELECTED_DATA_POINT,
    payload: dataPoint,
  };
};

export const SET_CHART_REFRESH_KEY = "SET_CHART_REFRESH_KEY";
export const setChartRefreshKey = (refreshKey: string) => {
  return {
    type: SET_CHART_REFRESH_KEY,
    payload: refreshKey,
  };
};
