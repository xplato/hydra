/// <reference types="react" />
import { ColoredComponent, CommonFormProps, CommonProps, CommonToggleProps } from "../types";
interface Props extends CommonProps, CommonFormProps<boolean>, CommonToggleProps, ColoredComponent {
    defaultChecked?: boolean;
}
export declare const Checkbox: {
    ({ label, layout, defaultChecked, onChange, bg, altClass, className, toggleControlAltClass, toggleControlClassname, }: Props): JSX.Element;
    defaultProps: {
        layout: string;
    };
};
export {};
