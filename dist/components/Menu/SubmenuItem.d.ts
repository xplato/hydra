/// <reference types="react" />
import { Action, ActionConfig } from "./types";
interface Props {
    actionProps: ActionProps;
    config: ActionConfig;
}
interface ActionProps extends Action {
    index: number;
}
declare const SubmenuItem: ({ actionProps, config }: Props) => JSX.Element;
export default SubmenuItem;
