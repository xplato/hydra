import React from "react";
export interface SegmentedControlProps {
    segments: Segment[];
    defaultSelected?: number;
    onChange?: (segment: Segment) => void;
    mods?: Mod[];
    altClass?: string;
    className?: string;
}
declare type Mod = "icons-only" | "equal-children";
export interface Segment {
    label: string;
    icon?: React.ReactNode;
}
export declare const SegmentedControl: ({ segments, defaultSelected, onChange, mods, altClass, className, }: SegmentedControlProps) => JSX.Element;
export {};
