import React, { useCallback, useState } from "react"
import classNames from "classnames"

import { icons } from "../icons"
import {
	ColoredComponent,
	CommonFormProps,
	CommonProps,
	CommonToggleProps,
} from "../types"
import { generateMods } from "../logic"

interface Props
	extends CommonProps,
		CommonFormProps<boolean>,
		CommonToggleProps,
		ColoredComponent {
	defaultChecked?: boolean
}

export const Checkbox = ({
	label,
	layout,
	defaultChecked,
	onChange,
	bg,
	altClass,
	className,
	toggleControlAltClass,
	toggleControlClassname,
}: Props) => {
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
					generateMods({ bg }),
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
