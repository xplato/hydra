import React from "react";
import { Color } from '../types';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    bg: Color;
    altClass?: string;
    size?: "sm" | "default" | "lg";
}
export declare const Button: {
    ({ altClass, size, bg, onClick: _onClick, className, children, ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        size: string;
        bg: string;
    };
};
