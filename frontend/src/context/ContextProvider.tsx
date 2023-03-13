import { useReducer, ReactNode } from "react";
import { AppContext, initialAppState } from "./AppContext";
import { AppReducer } from "./AppReducer";

export interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialAppState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
