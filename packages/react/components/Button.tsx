import React, { MouseEventHandler } from "react"
import classNames from "classnames"

import { generateMods } from "../logic"

import { Color } from '../types'

// @ts-ignore
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	color: Color
	altClass?: string
	size?: "sm" | "default" | "lg"
}

export const Button = ({
	altClass,
	size,
	color,
	onClick: _onClick,
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
				generateMods({ size, color }),
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
	size: "default",
	color: "accent",
}
