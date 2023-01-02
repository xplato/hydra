import { ButtonProps } from './components/Button';
export interface HydraConfig {
    defaultProps?: {
        Button?: Partial<ButtonProps>;
    };
}
export declare const defaultConfig: HydraConfig;
