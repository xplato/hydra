/// <reference types="react" />
import { Action, ActionConfig } from "./types";
interface Props extends Action {
    submenuOpen?: boolean;
    config: ActionConfig;
}
declare const MenuAction: ({ onClick: _onClick, label, iconLeft, iconRight, contentRight, submenuOpen, config, }: Props) => JSX.Element;
export default MenuAction;
