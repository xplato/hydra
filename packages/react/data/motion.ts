import type { Variant } from "framer-motion"

export interface Variants {
	hidden: Variant
	visible: Variant
	exit?: Variant
}

export const variants = {
	// General animations
	fade: {
		default: {
			hidden: { opacity: 0 },
			visible: { opacity: 1 },
		},
		in: {
			up: {
				hidden: { opacity: 0, y: 16 },
				visible: { opacity: 1, y: 0 },
			},
			right: {
				hidden: { opacity: 0, x: -16 },
				visible: { opacity: 1, x: 0 },
			},
		},
	},
	scale: {
		full: {
			hidden: { opacity: 0, scale: 0 },
			visible: { opacity: 1, scale: 1 },
		},
		half: {
			hidden: { opacity: 0, scale: 0.5 },
			visible: { opacity: 1, scale: 1 },
		},
		partial: {
			hidden: { opacity: 0, scale: 0.85 },
			visible: { opacity: 1, scale: 1 },
		},
		subtle: {
			hidden: { opacity: 0, scale: 0.95 },
			visible: { opacity: 1, scale: 1 },
		},
	},

	// UI Component animations
	ui: {
		menu: {
			// hidden: { opacity: 0, height: 0 },
			// visible: { opacity: 1, height: "auto" },
			// hidden: { opacity: 0, y: -6 },
			// visible: { opacity: 1, y: 0 },
		},
	},
} as const

export const transition = {
	tween: (duration: number = 0.5, delay: number = 0) => ({
		type: "tween",
		duration,
		delay,
	}),
	spring: (
		duration: number = 0.5,
		delay: number = 0,
		{ stiffness = 100, damping = 100 }
	) => ({
		type: "spring",
		duration,
		delay,
		stiffness,
		damping,
	}),
	ui: {
		menu: {
			type: "spring",
			duration: 0.3,
		},
	},
} as const

export const spring = {
	smooth: { stiffness: 1000, damping: 100 },
	smoother: { stiffness: 500, damping: 100 },
	smoothest: { stiffness: 50, damping: 100 },
}
