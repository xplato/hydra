export interface CommonProps {
	className?: string
	altClass?: string
}

export interface Children {
	children?: React.ReactNode
}

export type Layout =
	| "horizontal"
	| "horizontal-reverse"
	| "vertical"
	| "vertical-reverse"

export interface CommonFormProps<Value> {
	onChange?: (currentValue: Value) => void
	label?: string | ((currentValue: Value) => string)
	layout?: Layout
}
