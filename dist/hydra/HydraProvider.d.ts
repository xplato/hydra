import React from "react";
import { HydraConfig, THydraContext } from "./types";
import { Children } from "../types";
export declare const HydraContext: React.Context<THydraContext>;
interface HydraProviderProps extends Children {
    config?: HydraConfig;
}
export declare const HydraProvider: ({ config, children, }: HydraProviderProps) => JSX.Element;
export {};
