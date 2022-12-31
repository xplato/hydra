/// <reference types="react" />
import { Color, Layout } from '../types';
export interface SwitchProps {
    label?: string | ((currentValue: boolean) => string);
    onChange?: (currentValue: boolean) => void;
    defaultOn?: boolean;
    layout?: Layout;
    bg?: Color;
    altClass?: string;
    className?: string;
    toggleControlAltClass?: string;
    toggleControlClassname?: string;
}
export declare const Switch: {
    ({ className, altClass, defaultOn, toggleControlAltClass, toggleControlClassname, onChange, label, layout, bg, }: SwitchProps): JSX.Element;
    defaultProps: {
        layout: string;
        bg: string;
    };
};
