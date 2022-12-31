/// <reference types="react" />
import { colors } from './v';
export interface CommonProps {
    className?: string;
    altClass?: string;
}
export interface Children {
    children?: React.ReactNode;
}
export declare type Layout = "horizontal" | "horizontal-reverse" | "vertical" | "vertical-reverse";
export interface CommonFormProps<Value> {
    onChange?: (currentValue: Value) => void;
    label?: string | ((currentValue: Value) => string);
    layout?: Layout;
}
export interface CommonToggleProps {
    toggleControlAltClass?: string;
    toggleControlClassname?: string;
}
export interface ColoredComponent {
    bg?: typeof colors[keyof typeof colors];
}
