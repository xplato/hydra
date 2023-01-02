import React, { MouseEventHandler } from "react"
import classNames from "classnames"

import { useDefaults } from '../hooks/useDefaults'

import { generateMods } from "../logic"

import { Color } from "../types"

// TS doesn't like my color prop lol
// @ts-ignore
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "secondary"
	color?: Color
	size?: "sm" | "md" | "lg"
	rounded?: boolean
	altClass?: string
	className?: string
}

export const Button = ({
	variant,
	color,
	size,
	rounded,
	onClick: _onClick,
	altClass,
	className,
	children,
	...props
}: ButtonProps) => {
	const defaults = useDefaults("Button")

	const onClick: MouseEventHandler<HTMLButtonElement> = ev => {
		if (_onClick) _onClick(ev)
	}

	return (
		// @ts-ignore - color prop
		<button
			className={classNames(
				altClass ?? "hydra-button",
				generateMods({
					variant,
					color: color ?? defaults.color,
					size: size ?? defaults.size,
					rounded,
				}),
				className
			)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}