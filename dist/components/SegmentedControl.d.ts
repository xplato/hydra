import React from "react";
export interface SegmentedControlProps {
    segments: Segment[];
    defaultSelected?: number;
    onChange?: (segment: Segment) => void;
    altClass?: string;
    className?: string;
    iconsOnly?: boolean;
}
export interface Segment {
    label: string;
    icon?: React.ReactNode;
}
export declare const SegmentedControl: ({ segments, defaultSelected, onChange, altClass, className, iconsOnly, }: SegmentedControlProps) => JSX.Element;
