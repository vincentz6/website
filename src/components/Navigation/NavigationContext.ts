import { createContext, useContext } from "react";

export const NavigationContext = createContext<(() => void) | undefined>(undefined);

export function useNavigation() {
  return useContext(NavigationContext);
}
