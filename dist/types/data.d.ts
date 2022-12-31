import { MouseEvent } from 'react';
export interface Action {
    label: string;
    onClick: (ev?: MouseEvent) => void;
}
