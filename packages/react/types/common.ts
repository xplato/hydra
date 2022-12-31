import { Layout } from './utils'

// Common props
export interface CommonProps {
	className?: string
	altClass?: string
}

export interface CommonFormProps<Value> {
	onChange?: (currentValue: Value) => void
	label?: string | ((currentValue: Value) => string)
	layout?: Layout
}

export interface CommonToggleProps {
	toggleControlAltClass?: string
	toggleControlClassname?: string
}