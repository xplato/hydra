import React from "react";
import { Color } from "../types";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary";
    color?: Color;
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
    altClass?: string;
    className?: string;
}
export declare const Button: ({ variant, color, size, rounded, onClick: _onClick, altClass, className, children, ...props }: ButtonProps) => JSX.Element;
