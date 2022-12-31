/// <reference types="react" />
import { colors } from './v';
export declare type Color = typeof colors[keyof typeof colors];
export interface CommonProps {
    className?: string;
    altClass?: string;
}
export interface Children {
    children?: React.ReactNode;
}
export declare type Layout = "horizontal" | "horizontal-reverse" | "vertical" | "vertical-reverse";
export interface ColoredComponent {
    bg?: Color;
}
