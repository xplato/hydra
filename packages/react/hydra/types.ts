import { ButtonProps } from "../components/Button"
import { CheckboxProps } from "../components/Checkbox"
import { DropdownProps } from "../components/Dropdown"
import { MenuProps } from "../components/Menu"
import { SegmentedControlProps } from "../components/SegmentedControl"
import { SelectProps } from "../components/Select"
import { SwitchProps } from "../components/Switch"

export type ComponentKey =
	| "Button"
	| "Checkbox"
	| "Dropdown"
	| "Menu"
	| "SegmentedControl"
	| "Select"
	| "Switch"

export type DefaultPropsObject<T> = Partial<T> & {
	extras?: {
		[key: string]: any
	}
}

export interface DefaultProps {
	Button: DefaultPropsObject<ButtonProps>
	Checkbox: DefaultPropsObject<CheckboxProps>
	Dropdown: DefaultPropsObject<DropdownProps>
	Menu: DefaultPropsObject<MenuProps>
	SegmentedControl: DefaultPropsObject<SegmentedControlProps>
	Select: DefaultPropsObject<SelectProps>
	Switch: DefaultPropsObject<SwitchProps>
}

export interface HydraConfig {
	defaultProps: DefaultProps
}

export interface THydraContext extends HydraConfig {}
