import React, { useEffect, useState } from "react"
import classNames from "classnames"

import { capitalize, generateMods } from "../logic"

export interface SegmentedControlProps {
	segments: Segment[]
	defaultSelected?: number
	onChange?: (segment: Segment) => void

	altClass?: string
	className?: string

	// Mods
	iconsOnly?: boolean
}

export interface Segment {
	label: string
	icon?: React.ReactNode
}

export const SegmentedControl = ({
	segments,
	defaultSelected,
	onChange,

	altClass,
	className,

	iconsOnly,
}: SegmentedControlProps) => {
	const [selected, setSelected] = useState<number | undefined>(undefined)

	const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
		width: "auto",
		left: 0,
	})

	const getSegmentID = (segment: Segment) =>
		`segment-${segment.label.replaceAll(" ", "-")}`

	useEffect(() => {
		if (selected === undefined) {
			select(segments[defaultSelected ?? 0])
		}
	}, [defaultSelected])

	const select = (segment: Segment) => {
		setSelected(segments.indexOf(segment))

		const elem = document.getElementById(getSegmentID(segment))

		setIndicatorStyle({
			width: elem?.offsetWidth ?? "auto",
			left: elem?.offsetLeft ?? 0,
		})
	}

	useEffect(() => {
		if (typeof onChange === "function") {
			onChange(segments[selected || 0])
		}
	}, [selected])

	return (
		<div
			className={classNames(
				altClass ?? "hydra-segmented-control",
				className,
				generateMods({ iconsOnly })
			)}
			onMouseLeave={() => select(segments[selected || 0])}
		>
			<div className="indicator" style={indicatorStyle}></div>

			<div className={classNames("controls")}>
				{segments.map((segment, index) => {
					const isSelected = selected === index

					return (
						<button
							key={segment.label}
							id={getSegmentID(segment)}
							title={capitalize(segment.label)}
							className={classNames(
								"segment",
								generateMods({ isSelected })
							)}
							onClick={() => select(segment)}
							onMouseOver={() => {
								const elem = document.getElementById(
									getSegmentID(segment)
								)

								setIndicatorStyle({
									width: elem?.offsetWidth ?? "auto",
									left: elem?.offsetLeft ?? 0,
								})
							}}
						>
							{segment.icon && (
								<i className="icon size-5 mr-1">
									{segment.icon}
								</i>
							)}
							<span>{segment.label}</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}
