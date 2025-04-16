import { createContext, useContext } from "react";

export type NavigateFunction = (targetId: string) => void;

export const NavigationContext = createContext<NavigateFunction | undefined>(
  undefined
);

export function useNavigation() {
  return useContext(NavigationContext);
}
