import { createContext, Dispatch, useContext } from "react";
import { IAction } from "./AppActions";

export interface IAppContext {
  selectedThreadId?: string;
  username?: string;
  dispatch?: Dispatch<IAction>;
}

export const initialAppState: IAppContext = {};

export const AppContext = createContext<IAppContext>(initialAppState);

export const useAppState = () => useContext(AppContext);
