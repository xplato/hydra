import React, { useCallback, useState } from "react"
import classNames from "classnames"

import { generateMods } from "../logic"

import { Color, Layout } from '../types'

export interface SwitchProps {
	label?: string | ((currentValue: boolean) => string)
	onChange?: (currentValue: boolean) => void
	defaultOn?: boolean
	layout?: Layout
	bg?: Color
	altClass?: string
	className?: string
	toggleControlAltClass?: string
	toggleControlClassname?: string
}

export const Switch = ({
	className,
	altClass,
	defaultOn,
	toggleControlAltClass,
	toggleControlClassname,
	onChange,
	label,
	layout,
	bg,
}: SwitchProps) => {
	const [on, setOn] = useState(defaultOn || false)

	const toggle = useCallback(() => {
		setOn(!on)
		onChange && onChange(!on)
	}, [on])

	return (
		<div
			className={classNames(
				toggleControlAltClass ?? "hydra-toggle-control",
				layout,
				toggleControlClassname
			)}
		>
			<button
				onClick={toggle}
				className={classNames(
					altClass ?? "hydra-switch",
					generateMods({ on, bg }),
					className
				)}
			>
				<div className="bg"></div>
			</button>

			{label && (
				<div className="label-wrap" onClick={toggle}>
					<label>
						{typeof label === "function" ? label(on) : label}
					</label>
				</div>
			)}
		</div>
	)
}

Switch.defaultProps = {
	layout: "horizontal",
	bg: "accent",
}
