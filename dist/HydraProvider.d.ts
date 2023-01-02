/// <reference types="react" />
import { Children } from "./types";
import { HydraConfig } from "./hydra";
interface THydraContext {
    config: HydraConfig;
}
interface Props extends Children {
    config?: HydraConfig;
}
export declare const HydraProvider: ({ config, children }: Props) => JSX.Element;
export declare const useHydra: () => THydraContext;
export {};
