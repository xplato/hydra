import React from "react";
import { MenuProps } from "./Menu";
export interface Option {
    label: string;
    value: string;
}
export interface SelectProps {
    options: Option[];
    defaultSelected?: Option;
    onChange?: (option: Option) => void;
    triggerChildren: ((selected: Option) => React.ReactNode) | React.ReactNode;
    triggerClassName?: string;
    menuProps?: Partial<MenuProps>;
}
export declare const Select: ({ options, defaultSelected, onChange, triggerChildren, triggerClassName, menuProps, }: SelectProps) => JSX.Element;
