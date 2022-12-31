import React, { MouseEventHandler, useRef } from "react"
import classNames from "classnames"

import { generateMods } from "../../logic"

import { Action, ActionConfig } from "./types"

interface Props extends Action {
	click?: MouseEventHandler
	submenuOpen?: boolean
	config: ActionConfig
}

const MenuAction = ({
	click,
	label,
	iconLeft,
	iconRight,
	contentRight,
	submenuOpen,
	config,
}: Props) => {
	const ref = useRef<HTMLButtonElement>(null)

	const onClick: MouseEventHandler = ev => {
		if (typeof click === "function") {
			click(ev)
		}
	}

	return (
		<div className="action-wrap">
			<button
				ref={ref}
				onClick={onClick}
				className={classNames(
					"menu-action px-4 py-2-5",
					generateMods({ submenuOpen, color: config.color || "gray" })
				)}
				role="menuitem"
				tabIndex={0}
			>
				<div className="action-content">
					<div className="wfull SBStack">
						<div className="HStack">
							{iconLeft && (
								<div className="relative">
									<i className="icon size-5">{iconLeft}</i>
								</div>
							)}
							<span>{label}</span>
						</div>
						<div className="HStack">
							{iconRight && (
								<div className="relative flex-c">
									<i className="icon size-5">{iconRight}</i>
								</div>
							)}
							{contentRight}
						</div>
					</div>
				</div>
			</button>
		</div>
	)
}

export default MenuAction
