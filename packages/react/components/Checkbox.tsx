import React, { useCallback, useState } from "react"
import classNames from "classnames"

import { generateMods } from "../logic"
import { icons } from "../data"

import { Color, Layout } from '../types'

interface CheckboxProps {
	onChange?: (currentValue: boolean) => void
	label?: string | ((currentValue: boolean) => string)
	layout?: Layout
	defaultChecked?: boolean
	color?: Color
	altClass?: string
	className?: string
	toggleControlAltClass?: string
	toggleControlClassname?: string
}

export const Checkbox = ({
	label,
	layout,
	defaultChecked,
	onChange,
	color,
	altClass,
	className,
	toggleControlAltClass,
	toggleControlClassname,
}: CheckboxProps) => {
	const [checked, setChecked] = useState(defaultChecked || false)

	const toggle = useCallback(() => {
		setChecked(!checked)
		onChange && onChange(!checked)
	}, [checked])

	return (
		<div
			className={classNames(
				toggleControlAltClass ?? "hydra-toggle-control",
				toggleControlClassname,
				layout
			)}
		>
			<button
				onClick={toggle}
				className={classNames(
					altClass ?? "hydra-checkbox",
					generateMods({ color }),
					className
				)}
				data-checked={checked}
			>
				{checked && <i className="icon size-5">{icons.check}</i>}
			</button>

			{label && (
				<div className="label-wrap" onClick={toggle}>
					<label>
						{typeof label === "function" ? label(checked) : label}
					</label>
				</div>
			)}
		</div>
	)
}

Checkbox.defaultProps = {
	layout: "horizontal",
}
