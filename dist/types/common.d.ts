import { Layout } from './utils';
export interface CommonProps {
    className?: string;
    altClass?: string;
}
export interface CommonFormProps<Value> extends CommonProps {
    onChange?: (currentValue: Value) => void;
    label?: string | ((currentValue: Value) => string);
    layout?: Layout;
}
export interface CommonToggleProps {
    toggleControlAltClass?: string;
    toggleControlClassname?: string;
}
export interface CommonDynamicPanelProps {
    isOpen: boolean;
    close: () => void;
}
