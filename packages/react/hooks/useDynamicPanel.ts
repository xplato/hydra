import { useRef, useState, useEffect, RefObject, MouseEvent } from "react"

export interface DynamicPanel<ElementType> {
	ref: RefObject<ElementType>
	isOpen: boolean
	toggle: (ev?: MouseEvent) => void
	open: (ev?: MouseEvent) => void
	close: (ev?: MouseEvent) => void
}

export const useDynamicPanel = <
	ElementType extends Element
>(): DynamicPanel<ElementType> => {
	const ref = useRef<ElementType>(null)
	const [isOpen, setIsOpen] = useState(false)

	const handleWindowClick = (ev: MouseEvent) => {
		if (
			ref.current &&
			typeof ref.current?.contains === "function" &&
			!ref.current.contains(ev.target as Node)
		) {
			close(ev)
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined" && ref.current && isOpen) {
			// I'm not really sure why TS is complaining here. It says that the
			// handleWindowClick function is invalid because it doesn't match the
			// signature of the event listener, which it supposes to be
			// (Window, MouseEvent), but if you log the arguments, you see
			// that only one is passed: MouseEvent (technically an instance
			// of PointerEvent, actually).
			//
			// @ts-ignore
			window.addEventListener("click", handleWindowClick)
		}

		return () => {
			// @ts-ignore
			window.removeEventListener("click", handleWindowClick)
		}
	}, [ref.current, isOpen])

	const open = (ev?: MouseEvent) => {
		if (ev) {
			ev.stopPropagation()
		}

		setIsOpen(true)
	}

	const close = (ev?: MouseEvent) => {
		if (ev) {
			ev.stopPropagation()
		}

		setIsOpen(false)
	}

	const toggle = (ev?: MouseEvent) => {
		if (ev) {
			ev.stopPropagation()
		}

		setIsOpen(isOpen => !isOpen)
	}

	return {
		ref,
		isOpen,
		open,
		close,
		toggle,
	}
}
