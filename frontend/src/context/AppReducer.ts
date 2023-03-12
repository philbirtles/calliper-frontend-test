import { IAppContext } from "./AppContext";
import { IAction } from "./AppActions";

export const AppReducer = (state: IAppContext, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
