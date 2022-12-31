import React from "react";
export interface SegmentedControlProps {
    segments: Segment[];
    defaultSelected?: number;
    onChange?: (segment: Segment) => void;
}
export interface Segment {
    label: string;
    icon?: React.ReactNode;
}
export declare const SegmentedControl: ({ segments, defaultSelected, onChange, }: SegmentedControlProps) => JSX.Element;
