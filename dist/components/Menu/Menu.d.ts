import React from "react";
import { Action, ActionConfig } from "./types";
export interface MenuProps {
    isOpen: boolean;
    close: () => void;
    actions: Action[];
    config?: ActionConfig;
    origin?: string;
    top?: number | string | boolean;
    right?: number | string | boolean;
    bottom?: number | string | boolean;
    left?: number | string | boolean;
    size?: "sm" | "md";
    mods?: Mod[];
    leaveDoesCloseMenu?: boolean;
    actionClickDoesCloseMenu?: boolean;
    [key: string]: any;
}
declare type Mod = "items-bordered";
export declare const Menu: React.ForwardRefExoticComponent<Pick<MenuProps, React.ReactText> & React.RefAttributes<HTMLDivElement>>;
export {};
