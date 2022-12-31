// A controlled Menu component ideal for showing a list of actions.

import React from "react"

import { useDynamicPanel } from "../hooks"

import { Button } from "./Button"
import { Menu } from "./Menu"

interface DropdownProps {
	isOpen: boolean
	close: () => void
}

export const Dropdown = ({}: DropdownProps) => {
	const menu = useDynamicPanel<HTMLDivElement>()

	return (
		<div className="hydra-dropdown">
			<Button onClick={menu.toggle}>Open</Button>
			<Menu
				top={42}
				actions={[
					{
						label: "Action 1",
					},
					{
						label: "Action 2",
					},
					{
						label: "Action 3",
						submenu: [
							{
								label: "Action 1",
							},
							{
								label: "Action 2",
							},
							{
								label: "Action 3",
							},
						],
					},
					{
						label: "Action 4",
					},
				]}
				{...menu}
			/>
		</div>
	)
}

Dropdown.defaultProps = {}
