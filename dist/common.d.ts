import { colors } from './v';
export interface ColoredComponent {
    bg?: typeof colors[keyof typeof colors];
}
