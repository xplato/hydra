import React, { MouseEventHandler } from "react"
import classNames from "classnames"

import { generateMods } from "../logic"
import { ColoredComponent } from "../types"

export interface ButtonProps
	extends ColoredComponent,
		React.HTMLAttributes<HTMLButtonElement> {
	altClass?: string
	size?: "sm" | "default" | "lg"
}

export const Button = ({
	altClass,
	size,
	bg,
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
				generateMods({ size, bg }),
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
	bg: "accent",
}
