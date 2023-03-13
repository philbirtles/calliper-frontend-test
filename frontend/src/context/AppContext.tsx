import { createContext, Dispatch, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { IAction } from "./AppActions";

export interface IAppContext {
  selectedDataPoint?: ChartDataPointThread;
  chartRefreshKey: string;
  selectedThreadId?: string;
  username?: string;
  dispatch?: Dispatch<IAction>;
}

export const initialAppState: IAppContext = { chartRefreshKey: uuidv4() };

export const AppContext = createContext<IAppContext>(initialAppState);

export const useAppState = () => useContext(AppContext);
