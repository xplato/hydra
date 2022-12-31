/// <reference types="react" />
import { CommonProps, CommonFormProps } from "../types";
import { ColoredComponent } from '../common';
export interface SwitchProps extends CommonProps, CommonFormProps<boolean>, ColoredComponent {
    defaultOn?: boolean;
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
