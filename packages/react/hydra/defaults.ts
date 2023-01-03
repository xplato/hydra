import { HydraConfig } from './types';

export const defaultConfig: HydraConfig = {
  defaultProps: {
    Button: {
      variant: "default",
      size: "md",
      color: "accent",
    },
    Checkbox: {
      layout: "horizontal",
      color: "accent",
    },
    Dropdown: {},
    Menu: {
      actionSize: "md",
      itemsBordered: false,
      leaveDoesCloseMenu: true,
      actionClickDoesCloseMenu: true
    },
    SegmentedControl: {
      iconsOnly: false,
    },
    Select: {},
    Switch: {
      color: "accent",
      layout: "horizontal",
    },
  }
}