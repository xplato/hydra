/// <reference types="react" />
import { Action, ActionConfig } from "./types";
interface Props {
    actions: Action[];
    actionClickDoesCloseMenu?: boolean;
    close: () => void;
    config: ActionConfig;
}
declare const MenuActions: ({ actions, actionClickDoesCloseMenu, close, config, }: Props) => JSX.Element;
export default MenuActions;
