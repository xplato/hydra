/// <reference types="react" />
import { Color, Layout } from '../types';
export interface SwitchProps {
    label?: string | ((currentValue: boolean) => string);
    onChange?: (currentValue: boolean) => void;
    defaultOn?: boolean;
    layout?: Layout;
    color?: Color;
    altClass?: string;
    className?: string;
    toggleControlAltClass?: string;
    toggleControlClassname?: string;
}
export declare const Switch: {
    ({ className, altClass, defaultOn, toggleControlAltClass, toggleControlClassname, onChange, label, layout, color, }: SwitchProps): JSX.Element;
    defaultProps: {
        layout: string;
        color: string;
    };
};
