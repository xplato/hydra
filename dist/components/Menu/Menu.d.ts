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
    leaveDoesCloseMenu?: boolean;
    actionClickDoesCloseMenu?: boolean;
    [key: string]: any;
}
export declare const Menu: React.ForwardRefExoticComponent<Pick<MenuProps, React.ReactText> & React.RefAttributes<HTMLDivElement>>;
