/// <reference types="react" />
import { Color, Layout } from "../types";
export interface CheckboxProps {
    onChange?: (currentValue: boolean) => void;
    label?: string | ((currentValue: boolean) => string);
    layout?: Layout;
    defaultChecked?: boolean;
    color?: Color;
    altClass?: string;
    className?: string;
    toggleControlAltClass?: string;
    toggleControlClassname?: string;
}
export declare const Checkbox: ({ label, layout, defaultChecked, onChange, color, altClass, className, toggleControlAltClass, toggleControlClassname, }: CheckboxProps) => JSX.Element;
