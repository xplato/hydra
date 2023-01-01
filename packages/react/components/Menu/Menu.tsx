import React, { ForwardedRef, forwardRef, useState } from "react"
import { AnimatePresence, useReducedMotion, motion } from "framer-motion"
import classNames from "classnames"

import MenuActions from "./MenuActions"

import { transition, variants } from "../../data"

import { Action, ActionConfig } from "./types"
import { generateMods } from "../../logic"

export interface MenuProps {
	isOpen: boolean
	close: () => void
	actions: Action[]

	config?: ActionConfig

	origin?: string
	top?: number | string | boolean
	right?: number | string | boolean
	bottom?: number | string | boolean
	left?: number | string | boolean

	size?: "sm" | "md"

	// Mods
	itemsBordered?: boolean
	leaveDoesCloseMenu?: boolean
	actionClickDoesCloseMenu?: boolean

	[key: string]: any
}

export const Menu = forwardRef(
	(
		{
			isOpen,
			close,
			actions,

			config,

			origin,
			top,
			right,
			bottom,
			left,

			size,

			itemsBordered,
			leaveDoesCloseMenu,
			actionClickDoesCloseMenu,

			className,
			...props
		}: MenuProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const [isAnimating, setIsAnimating] = useState(false)

		const shouldReduceMotion = useReducedMotion()

		const getPositionValue = (
			value: number | string | boolean | undefined
		): string => {
			if (typeof value === "undefined") {
				return "auto"
			}

			if (typeof value === "boolean") {
				return "0"
			}

			if (typeof value === "number") {
				return `${value}px`
			}

			return value
		}

		const onMouseLeave = () => {
			if (leaveDoesCloseMenu) {
				close()
			}
		}

		return (
			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={ref}
						variants={variants.scale.subtle}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={
							shouldReduceMotion
								? {
										duration: 0,
								  }
								: transition.ui.menu
						}
						className={classNames(
							"hydra-menu",
							className,
							generateMods({ size, itemsBordered })
						)}
						style={{
							transformOrigin: origin,
							top: getPositionValue(top),
							right: getPositionValue(right),
							bottom: getPositionValue(bottom),
							left: getPositionValue(left),
						}}
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						aria-busy={isAnimating}
						onClick={ev => ev.stopPropagation()}
						onAnimationStart={() => setIsAnimating(true)}
						onAnimationComplete={() => setIsAnimating(false)}
						onMouseLeave={onMouseLeave}
						{...props}
					>
						<div className="wfull p-0">
							<MenuActions
								actions={actions}
								actionClickDoesCloseMenu={
									actionClickDoesCloseMenu
								}
								close={close}
								config={
									config ??
									({
										color: "default",
									} as ActionConfig)
								}
							/>
						</div>
						{/* <Keyboard
								keys={["esc"]}
								onKeyPress={(key, ev) => {
									ev.preventDefault()

									if (key === "esc") {
										close()
										return
									}
								}}
								handleFocusableElements
								isExclusive
							/> */}
					</motion.div>
				)}
			</AnimatePresence>
		)
	}
)

Menu.defaultProps = {
	origin: "top left",
	top: "1rem",
	size: "sm",

	leaveDoesCloseMenu: false,
	actionClickDoesCloseMenu: true,
}
