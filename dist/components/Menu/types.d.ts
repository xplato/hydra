export interface Action {
    id?: string;
    label: string;
    onClick: (ev?: MouseEvent) => void;
    clickDoesCloseMenu?: boolean;
    submenu?: Action[];
}
