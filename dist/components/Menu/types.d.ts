import { Color } from '../../types';
export interface Action extends ActionConfig {
    id?: string;
    label: string;
    onClick: (ev?: MouseEvent) => void;
    clickDoesCloseMenu?: boolean;
    submenu?: Action[];
}
export interface ActionConfig {
    color?: Color & "default";
}
