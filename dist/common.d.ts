import { colors } from './v';
export interface ColoredComponent {
    bgcolor?: typeof colors[keyof typeof colors];
}
