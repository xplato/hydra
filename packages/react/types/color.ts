import { colors } from "../v"

export type Color = typeof colors[keyof typeof colors]

export interface ColoredComponent {
	bg?: Color
}
