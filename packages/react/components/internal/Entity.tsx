import React, { forwardRef, MouseEventHandler } from "react"
import { motion, MotionProps } from "framer-motion"

import type { Children } from "../../types"

interface Props extends Children, MotionProps {
	onClick?: MouseEventHandler
	[key: string]: any
}

const Entity = forwardRef(
	({ variants, shouldExit, children, ...props }: Props, ref) => {
		return (
			<motion.div
				ref={ref as any || undefined}
				variants={variants}
				initial="hidden"
				animate="visible"
				exit={
					shouldExit
						? variants?.exit
							? "exit"
							: "hidden"
						: undefined
				}
				{...props}
			>
				{children}
			</motion.div>
		)
	}
)

Entity.defaultProps = {
	shouldExit: true,
}

export default Entity
