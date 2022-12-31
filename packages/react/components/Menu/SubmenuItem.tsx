import React, { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import MenuActions from "./MenuActions"
import MenuAction from "./MenuAction"

import { variants } from "../../data"

import { Action, ActionConfig } from "./types"

interface Props {
	actionProps: ActionProps
	config: ActionConfig
}

interface ActionProps extends Action {
	index: number
}

const SubmenuItem = ({ actionProps, config }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	const shouldReduceMotion = useReducedMotion()

	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)

	return (
		<div
			className="wrapper"
			onFocus={open}
			onBlur={close}
			onMouseOver={open}
			onMouseLeave={close}
		>
			<MenuAction
				submenuOpen={isOpen}
				config={config}
				// icon={<ChevronRightIcon />}
				{...actionProps}
			/>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={variants.fade.in.right}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={
							shouldReduceMotion
								? {
										duration: 0,
								  }
								: {
										type: "spring",
										bounce: 0.35,
										duration: 0.4,
								  }
						}
						className="hydra-submenu"
					>
						<MenuActions
							actions={actionProps.submenu ?? []}
							actionClickDoesCloseMenu
							close={close}
							config={config}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default SubmenuItem
