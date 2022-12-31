/// <reference types="react" />
import { CommonProps, CommonFormProps, CommonToggleProps, ColoredComponent } from "../types";
export interface SwitchProps extends CommonProps, CommonFormProps<boolean>, ColoredComponent, CommonToggleProps {
    defaultOn?: boolean;
}
export declare const Switch: {
    ({ className, altClass, defaultOn, toggleControlAltClass, toggleControlClassname, onChange, label, layout, bg, }: SwitchProps): JSX.Element;
    defaultProps: {
        layout: string;
        bg: string;
    };
};
