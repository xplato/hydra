import React, { useCallback, useState } from "react"
import classNames from "classnames"

import { generateMods } from "../logic"

import { CommonProps, CommonFormProps } from "../types"
import { ColoredComponent } from '../common'

export interface SwitchProps extends CommonProps, CommonFormProps<boolean>, ColoredComponent {
	defaultOn?: boolean
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
					<label>{typeof label === "function" ? label(on) : label}</label>
				</div>
			)}
		</div>
	)
}

Switch.defaultProps = {
	layout: "horizontal",
  bg: "accent",
}
