import { createContext } from "react";

interface AppContextInterface {
    hospitalname: string;
    Address: string;
  }
export const ValueContext = createContext<AppContextInterface | null>(null);