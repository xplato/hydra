import React from "react";
import { Color } from '../types';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color: Color;
    altClass?: string;
    size?: "sm" | "default" | "lg";
}
export declare const Button: {
    ({ altClass, size, color, onClick: _onClick, className, children, ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        size: string;
        color: string;
    };
};
