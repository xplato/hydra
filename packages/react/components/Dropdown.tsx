// A controlled Menu component ideal for showing a list of actions.

import React from "react"

import { useDynamicPanel } from "../hooks"

import { Button } from "./Button"
import { Menu, MenuProps } from "./Menu"

import { Action } from "../types"

export interface DropdownProps {
	actions: Action[]
	menuProps?: Partial<MenuProps>
}

export const Dropdown = ({ actions, menuProps }: DropdownProps) => {
	const menu = useDynamicPanel<HTMLDivElement>()

	return (
		<div className="hydra-dropdown">
			<Button onClick={menu.toggle} size="sm">
				Open
			</Button>
			<Menu
				top={menuProps?.top || 42}
				actions={actions}
				{...menu}
				{...menuProps}
			/>
		</div>
	)
}
