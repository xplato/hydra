import React, { MouseEventHandler } from "react";
import { MotionProps } from "framer-motion";
import type { Children } from "../../types";
interface Props extends Children, MotionProps {
    onClick?: MouseEventHandler;
    [key: string]: any;
}
declare const Entity: React.ForwardRefExoticComponent<Pick<Props, React.ReactText> & React.RefAttributes<unknown>>;
export default Entity;
