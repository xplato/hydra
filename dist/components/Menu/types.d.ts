import { MouseEvent } from 'react';
import { Color } from '../../types';
export interface Action extends ActionConfig {
    id?: string;
    label: string;
    onClick: (ev?: MouseEvent) => void;
    submenu?: Action[];
    clickDoesCloseMenu?: boolean;
    contentRight?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
}
export interface ActionConfig {
    color?: Color & "default";
}
