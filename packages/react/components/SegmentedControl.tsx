import React, { useEffect, useLayoutEffect, useState } from "react"
import classNames from "classnames"

import { generateMods } from "../logic"

export interface SegmentedControlProps {
	segments: Segment[]
	defaultSelected?: number
	onChange?: (segment: Segment) => void
}

export interface Segment {
	label: string
	icon?: React.ReactNode
}

export const SegmentedControl = ({
	segments,
	defaultSelected,
	onChange,
}: SegmentedControlProps) => {
	const [selected, setSelected] = useState<number>(defaultSelected ?? 0)

	const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
		width: "auto",
		left: 0,
	})

	const getSegmentID = (segment: Segment) =>
		`segment-${segment.label.replaceAll(" ", "-")}`

	useLayoutEffect(() => {
		select(segments[defaultSelected ?? 0])
	}, [defaultSelected, segments])

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
			onChange(segments[selected])
		}
	}, [selected])

	return (
		<div
			className="hydra-segmented-control"
			onMouseLeave={() => select(segments[selected])}
		>
			<div className="indicator" style={indicatorStyle}></div>

			{segments.map((segment, index) => {
				const isSelected = selected === index

				return (
					<button
						key={segment.label}
						id={getSegmentID(segment)}
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
							<i className="icon size-5 mr-1">{segment.icon}</i>
						)}
						<span>{segment.label}</span>
					</button>
				)
			})}
		</div>
	)
}