import React, { MouseEventHandler } from "react"
import classNames from "classnames"

import { generateMods } from "../logic"

import { Color } from "../types"

// @ts-ignore
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "secondary"
	color: Color
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
	const onClick: MouseEventHandler<HTMLButtonElement> = ev => {
		if (_onClick) _onClick(ev)
	}

	return (
		<button
			className={classNames(
				altClass ?? "hydra-button",
				generateMods({ variant, color, size, rounded }),
				className
			)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}

Button.defaultProps = {
	size: "md",
	color: "accent",
}
