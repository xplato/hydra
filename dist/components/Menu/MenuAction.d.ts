import React, { MouseEventHandler } from "react";
import { Action, ActionConfig } from "./types";
interface Props extends Action {
    icon?: React.ReactNode;
    click?: MouseEventHandler;
    submenuOpen?: boolean;
    config: ActionConfig;
}
declare const MenuAction: ({ click, label, icon, submenuOpen, config }: Props) => JSX.Element;
export default MenuAction;
