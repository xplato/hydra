/// <reference types="react" />
import { MenuProps } from "./Menu";
import { Action } from "../types";
interface DropdownProps {
    actions: Action[];
    menuProps?: Partial<MenuProps>;
}
export declare const Dropdown: {
    ({ actions, menuProps }: DropdownProps): JSX.Element;
    defaultProps: {};
};
export {};
