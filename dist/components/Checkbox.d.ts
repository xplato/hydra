/// <reference types="react" />
import { Color, Layout } from '../types';
interface CheckboxProps {
    onChange?: (currentValue: boolean) => void;
    label?: string | ((currentValue: boolean) => string);
    layout?: Layout;
    defaultChecked?: boolean;
    bg?: Color;
    altClass?: string;
    className?: string;
    toggleControlAltClass?: string;
    toggleControlClassname?: string;
}
export declare const Checkbox: {
    ({ label, layout, defaultChecked, onChange, bg, altClass, className, toggleControlAltClass, toggleControlClassname, }: CheckboxProps): JSX.Element;
    defaultProps: {
        layout: string;
    };
};
export {};
