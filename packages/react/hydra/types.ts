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

export interface DefaultProps {
	Button: Partial<ButtonProps>
	Checkbox: Partial<CheckboxProps>
	Dropdown: Partial<DropdownProps>
	Menu: Partial<MenuProps>
	SegmentedControl: Partial<SegmentedControlProps>
	Select: Partial<SelectProps>
	Switch: Partial<SwitchProps>
}

export interface HydraConfig {
	defaultProps: DefaultProps
}

export interface THydraContext extends HydraConfig {}
