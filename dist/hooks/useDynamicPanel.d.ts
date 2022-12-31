import { RefObject, MouseEvent } from "react";
export interface DynamicPanel<ElementType> {
    ref: RefObject<ElementType>;
    isOpen: boolean;
    toggle: (ev?: MouseEvent) => void;
    open: (ev?: MouseEvent) => void;
    close: (ev?: MouseEvent) => void;
}
export declare const useDynamicPanel: <ElementType extends Element>() => DynamicPanel<ElementType>;
