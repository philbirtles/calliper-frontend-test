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
