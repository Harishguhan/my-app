import { createContext } from "react";

interface AppContextInterface {
    hospitalname: string;
    Address: string;
    State:string;
    Gstno:number;
    startingyear:number;
    branches:number;
    specialin:string;
    Email:string,
    contactno:number
  }
export const ValueContext = createContext<AppContextInterface | null>(null);


