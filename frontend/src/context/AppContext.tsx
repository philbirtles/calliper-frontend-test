import { createContext, Dispatch } from "react";
import { IAction } from "./AppActions";

export interface IAppContext {
  selectedThread?: string;
  username?: string;
  dispatch?: Dispatch<IAction>;
}

export const initialAppState: IAppContext = {};

export const AppContext = createContext<IAppContext>(initialAppState);
