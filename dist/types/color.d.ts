import { colors } from "../v";
export declare type Color = typeof colors[keyof typeof colors];
export interface ColoredComponent {
    bg?: Color;
}
