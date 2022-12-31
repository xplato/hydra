import classNames from "classnames"
import React, { useMemo } from "react"

import { useDynamicPanel } from "../hooks"

import { Menu, MenuProps } from "./Menu"

export interface Option {
	label: string
	value: string
}

export interface SelectProps {
	options: Option[]
	defaultSelected?: Option
	onChange?: (option: Option) => void
	triggerChildren: ((selected: Option) => React.ReactNode) | React.ReactNode
	triggerClassName?: string
	menuProps?: Partial<MenuProps>
}

export const Select = ({
	options,
	defaultSelected,
	onChange,
	triggerChildren,
	triggerClassName,
	menuProps,
}: SelectProps) => {
	const menu = useDynamicPanel<HTMLDivElement>()

	const [selected, setSelected] = React.useState<Option>(
		defaultSelected || options[0]
	)

	const select = (option: Option) => {
		setSelected(option)

		if (typeof onChange === "function") {
			onChange(option)
		}

		menu.close()
	}

	const actions = useMemo(() => {
		return options.map(option => {
			const isSelected = selected?.value === option.value

			return {
				...option,
				onClick: () => select(option),
				contentRight: isSelected && <div className="dot" />,
			}
		})
	}, [options, selected])

	return (
		<div className="hydra-select">
			<button
				onClick={menu.toggle}
				className={classNames(triggerClassName)}
			>
				{typeof triggerChildren === "function"
					? triggerChildren(selected)
					: triggerChildren}
			</button>

			<Menu actions={actions} {...menu} {...menuProps} />
		</div>
	)
}
