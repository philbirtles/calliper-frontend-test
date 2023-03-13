import { IAppContext } from "./AppContext";
import {
  IAction,
  SET_SELECTED_DATA_POINT,
  SET_CHART_REFRESH_KEY,
} from "./AppActions";

export const AppReducer = (state: IAppContext, action: IAction) => {
  switch (action.type) {
    case SET_CHART_REFRESH_KEY:
      return { ...state, chartRefreshKey: action.payload };
    case SET_SELECTED_DATA_POINT:
      return { ...state, selectedDataPoint: action.payload };
    default:
      return state;
  }
};
