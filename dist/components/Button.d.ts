import React from "react";
import { ColoredComponent } from "../types";
export interface ButtonProps extends ColoredComponent, React.HTMLAttributes<HTMLButtonElement> {
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
