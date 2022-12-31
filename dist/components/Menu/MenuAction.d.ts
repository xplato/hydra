import { MouseEventHandler } from "react";
import { Action, ActionConfig } from "./types";
interface Props extends Action {
    click?: MouseEventHandler;
    submenuOpen?: boolean;
    config: ActionConfig;
}
declare const MenuAction: ({ click, label, iconLeft, iconRight, contentRight, submenuOpen, config, }: Props) => JSX.Element;
export default MenuAction;
