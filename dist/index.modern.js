import React, { createContext, useContext, useRef, useState, useEffect, useCallback, forwardRef, useMemo } from 'react';
import classNames from 'classnames';
import { useReducedMotion, AnimatePresence, motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const defaultConfig = {
  defaultProps: {
    Button: {
      variant: "default",
      size: "md",
      color: "accent"
    },
    Checkbox: {
      layout: "horizontal",
      color: "accent"
    },
    Dropdown: {},
    Menu: {
      actionSize: "md",
      itemsBordered: false,
      leaveDoesCloseMenu: true,
      actionClickDoesCloseMenu: true
    },
    SegmentedControl: {
      iconsOnly: false
    },
    Select: {},
    Switch: {
      color: "accent",
      layout: "horizontal"
    }
  }
};

const HydraContext = createContext({
  ...defaultConfig
});
const HydraProvider = ({
  config: _config = defaultConfig,
  children
}) => {
  const value = {
    ...defaultConfig,
    ..._config
  };
  return React.createElement(HydraContext.Provider, {
    value: value
  }, children);
};

const useHydra = () => {
  const context = useContext(HydraContext);
  return context;
};

const useDynamicPanel = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleWindowClick = ev => {
    var _ref$current;
    if (ref.current && typeof ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains) === "function" && !ref.current.contains(ev.target)) {
      close(ev);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined" && ref.current && isOpen) {
      window.addEventListener("click", handleWindowClick);
    }
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [ref.current, isOpen]);
  const open = ev => {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(true);
  };
  const close = ev => {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(false);
  };
  const toggle = ev => {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(isOpen => !isOpen);
  };
  return {
    ref,
    isOpen,
    open,
    close,
    toggle
  };
};

const useDefaults = key => {
  const {
    defaultProps
  } = useHydra();
  return defaultProps[key] || defaultConfig.defaultProps[key];
};

const kebabize = str => {
  return str.replaceAll(" ", "-").split("").map((letter, index) => {
    if (letter === "-") {
      return "-";
    }
    return letter.toUpperCase() === letter ? `${index !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter;
  }).join("");
};
const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const generateMods = mods => {
  const keys = Object.keys(mods);
  if (keys.length === 0) {
    return "";
  }
  return keys.map(key => {
    const value = mods[key];
    if (value === true) {
      return kebabize(key);
    }
    if (!value) {
      return "";
    }
    return `${kebabize(key)}-${typeof value === "number" ? value : kebabize(value)}`;
  });
};

const omitFields = (object, fields) => {
  return Object.assign({}, object, Object.assign({}, ...fields.map(key => ({
    [key]: undefined
  }))));
};

const Button = ({
  variant,
  color,
  size,
  rounded,
  onClick: _onClick,
  altClass,
  className,
  children,
  ...props
}) => {
  const defaults = useDefaults("Button");
  const onClick = ev => {
    if (_onClick) _onClick(ev);
  };
  return React.createElement("button", Object.assign({
    className: classNames(altClass ?? "hydra-button", generateMods({
      variant,
      color: color ?? defaults.color,
      size: size ?? defaults.size,
      rounded
    }), className),
    onClick: onClick
  }, props), children);
};

const icons = {
  check: React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, React.createElement("path", {
    d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
  }))
};

const variants = {
  fade: {
    default: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    },
    in: {
      up: {
        hidden: {
          opacity: 0,
          y: 16
        },
        visible: {
          opacity: 1,
          y: 0
        }
      },
      right: {
        hidden: {
          opacity: 0,
          x: -16
        },
        visible: {
          opacity: 1,
          x: 0
        }
      }
    }
  },
  scale: {
    full: {
      hidden: {
        opacity: 0,
        scale: 0
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    },
    half: {
      hidden: {
        opacity: 0,
        scale: 0.5
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    },
    partial: {
      hidden: {
        opacity: 0,
        scale: 0.85
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    },
    subtle: {
      hidden: {
        opacity: 0,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    }
  },
  ui: {
    menu: {}
  }
};
const transition = {
  tween: (duration = 0.5, delay = 0) => ({
    type: "tween",
    duration,
    delay
  }),
  spring: (duration = 0.5, delay = 0, {
    stiffness: _stiffness = 100,
    damping: _damping = 100
  }) => ({
    type: "spring",
    duration,
    delay,
    stiffness: _stiffness,
    damping: _damping
  }),
  ui: {
    menu: {
      type: "spring",
      duration: 0.3
    }
  }
};

const Checkbox = ({
  label,
  layout,
  defaultChecked,
  onChange,
  color,
  altClass,
  className,
  toggleControlAltClass,
  toggleControlClassname
}) => {
  const defaults = useDefaults("Checkbox");
  const [checked, setChecked] = useState(defaultChecked || false);
  const toggle = useCallback(() => {
    setChecked(!checked);
    onChange && onChange(!checked);
  }, [checked]);
  return React.createElement("div", {
    className: classNames(toggleControlAltClass ?? "hydra-toggle-control", toggleControlClassname, layout ?? defaults.layout)
  }, React.createElement("button", {
    onClick: toggle,
    className: classNames(altClass ?? "hydra-checkbox", generateMods({
      color: color ?? defaults.color
    }), className),
    "data-checked": checked
  }, checked && React.createElement("i", {
    className: "icon size-5"
  }, icons.check)), label && React.createElement("div", {
    className: "label-wrap",
    onClick: toggle
  }, React.createElement("label", null, typeof label === "function" ? label(checked) : label)));
};

const MenuAction = ({
  onClick: _onClick,
  label,
  iconLeft,
  iconRight,
  contentRight,
  submenuOpen,
  config
}) => {
  const ref = useRef(null);
  const onClick = ev => {
    if (typeof _onClick === "function") {
      _onClick(ev);
    }
  };
  return React.createElement("div", {
    className: "action-wrap"
  }, React.createElement("button", {
    ref: ref,
    onClick: onClick,
    className: classNames("menu-action px-4 py-2-5", generateMods({
      submenuOpen,
      color: config.color || "gray"
    })),
    role: "menuitem",
    tabIndex: 0
  }, React.createElement("div", {
    className: "action-content"
  }, React.createElement("div", {
    className: "wfull SBStack"
  }, React.createElement("div", {
    className: "HStack"
  }, iconLeft && React.createElement("div", {
    className: "relative"
  }, React.createElement("i", {
    className: "icon size-5"
  }, iconLeft)), React.createElement("span", null, label)), React.createElement("div", {
    className: "HStack"
  }, iconRight && React.createElement("div", {
    className: "relative flex-c"
  }, React.createElement("i", {
    className: "icon size-5"
  }, iconRight)), contentRight)))));
};

const SubmenuItem = ({
  actionProps,
  config
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const props = omitFields(actionProps, ["onClick"]);
  return React.createElement("div", {
    className: "wrapper",
    onFocus: open,
    onBlur: close,
    onMouseOver: open,
    onMouseLeave: close
  }, React.createElement(MenuAction, Object.assign({
    submenuOpen: isOpen,
    config: config,
    iconRight: React.createElement(ChevronRightIcon, null),
    onClick: ev => {
      ev === null || ev === void 0 ? void 0 : ev.preventDefault();
      if (typeof actionProps.onClick === "function") {
        actionProps.onClick(ev);
      }
    }
  }, props)), React.createElement(AnimatePresence, null, isOpen && React.createElement(motion.div, {
    variants: variants.fade.in.right,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: shouldReduceMotion ? {
      duration: 0
    } : {
      type: "spring",
      bounce: 0.35,
      duration: 0.4
    },
    className: "hydra-submenu"
  }, React.createElement(MenuActions, {
    actions: actionProps.submenu ?? [],
    actionClickDoesCloseMenu: true,
    close: close,
    config: config
  }))));
};

const MenuActions = ({
  actions,
  actionClickDoesCloseMenu,
  close,
  config
}) => {
  return React.createElement("div", {
    className: "w-100p actions",
    role: "none"
  }, actions.map((action, index) => {
    const onClick = ev => {
      if (actionClickDoesCloseMenu && action.clickDoesCloseMenu !== false) {
        close();
      }
      if (typeof action.onClick === "function") {
        action.onClick(ev);
      }
    };
    if (action.label === "separator") {
      return React.createElement("div", {
        key: action.id,
        className: "separator"
      });
    }
    const _actionProps = omitFields({
      index: index,
      ...action
    }, ["onClick"]);
    const actionProps = {
      ..._actionProps,
      onClick: onClick
    };
    if (action.submenu) {
      return React.createElement(SubmenuItem, {
        key: action.label,
        actionProps: actionProps,
        config: config
      });
    }
    return React.createElement(MenuAction, Object.assign({
      key: action.label,
      config: config
    }, actionProps));
  }));
};

const Menu = forwardRef(({
  isOpen,
  close,
  actions,
  config,
  origin,
  top,
  right,
  bottom,
  left,
  actionSize,
  itemsBordered,
  leaveDoesCloseMenu,
  actionClickDoesCloseMenu,
  className,
  ...props
}, ref) => {
  const defaults = useDefaults("Menu");
  const [isAnimating, setIsAnimating] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const getPositionValue = value => {
    if (typeof value === "undefined") {
      return "auto";
    }
    if (typeof value === "boolean") {
      return "0";
    }
    if (typeof value === "number") {
      return `${value}px`;
    }
    return value;
  };
  const onMouseLeave = () => {
    if (leaveDoesCloseMenu ?? defaults.leaveDoesCloseMenu) {
      close();
    }
  };
  return React.createElement(AnimatePresence, null, isOpen && React.createElement(motion.div, Object.assign({
    ref: ref,
    variants: variants.scale.subtle,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: shouldReduceMotion ? {
      duration: 0
    } : transition.ui.menu,
    className: classNames("hydra-menu", className, generateMods({
      actionSize: actionSize ?? defaults.actionSize,
      itemsBordered
    })),
    style: {
      transformOrigin: origin,
      top: getPositionValue(top),
      right: getPositionValue(right),
      bottom: getPositionValue(bottom),
      left: getPositionValue(left)
    },
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    "aria-busy": isAnimating,
    onClick: ev => ev.stopPropagation(),
    onAnimationStart: () => setIsAnimating(true),
    onAnimationComplete: () => setIsAnimating(false),
    onMouseLeave: onMouseLeave
  }, props), React.createElement("div", {
    className: "wfull p-0"
  }, React.createElement(MenuActions, {
    actions: actions,
    actionClickDoesCloseMenu: actionClickDoesCloseMenu ?? defaults.actionClickDoesCloseMenu,
    close: close,
    config: config ?? {
      color: "default"
    }
  }))));
});
Menu.defaultProps = {
  origin: "top left",
  top: "1rem",
  actionSize: "sm",
  leaveDoesCloseMenu: false,
  actionClickDoesCloseMenu: true
};

const Dropdown = ({
  actions,
  menuProps
}) => {
  const menu = useDynamicPanel();
  return React.createElement("div", {
    className: "hydra-dropdown"
  }, React.createElement(Button, {
    onClick: menu.toggle,
    size: "sm"
  }, "Open"), React.createElement(Menu, Object.assign({
    top: (menuProps === null || menuProps === void 0 ? void 0 : menuProps.top) || 42,
    actions: actions
  }, menu, menuProps)));
};

const SegmentedControl = ({
  segments,
  defaultSelected,
  onChange,
  altClass,
  className,
  iconsOnly
}) => {
  const defaults = useDefaults("SegmentedControl");
  const [selected, setSelected] = useState(undefined);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: "auto",
    left: 0
  });
  const getSegmentID = segment => `segment-${segment.label.replaceAll(" ", "-")}`;
  useEffect(() => {
    if (selected === undefined) {
      select(segments[defaultSelected ?? 0]);
    }
  }, [defaultSelected]);
  const select = segment => {
    setSelected(segments.indexOf(segment));
    const elem = document.getElementById(getSegmentID(segment));
    setIndicatorStyle({
      width: (elem === null || elem === void 0 ? void 0 : elem.offsetWidth) ?? "auto",
      left: (elem === null || elem === void 0 ? void 0 : elem.offsetLeft) ?? 0
    });
  };
  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(segments[selected || 0]);
    }
  }, [selected]);
  return React.createElement("div", {
    className: classNames(altClass ?? "hydra-segmented-control", className, generateMods({
      iconsOnly: iconsOnly ?? defaults.iconsOnly
    })),
    onMouseLeave: () => select(segments[selected || 0])
  }, React.createElement("div", {
    className: "indicator",
    style: indicatorStyle
  }), React.createElement("div", {
    className: classNames("controls")
  }, segments.map((segment, index) => {
    const isSelected = selected === index;
    return React.createElement("button", {
      key: segment.label,
      id: getSegmentID(segment),
      title: capitalize(segment.label),
      className: classNames("segment", generateMods({
        isSelected
      })),
      onClick: () => select(segment),
      onMouseOver: () => {
        const elem = document.getElementById(getSegmentID(segment));
        setIndicatorStyle({
          width: (elem === null || elem === void 0 ? void 0 : elem.offsetWidth) ?? "auto",
          left: (elem === null || elem === void 0 ? void 0 : elem.offsetLeft) ?? 0
        });
      }
    }, segment.icon && React.createElement("i", {
      className: "icon size-5 mr-1"
    }, segment.icon), React.createElement("span", null, segment.label));
  })));
};

const Select = ({
  options,
  defaultSelected,
  onChange,
  triggerChildren,
  triggerClassName,
  menuProps
}) => {
  const menu = useDynamicPanel();
  const [selected, setSelected] = React.useState(defaultSelected || options[0]);
  const select = option => {
    setSelected(option);
    if (typeof onChange === "function") {
      onChange(option);
    }
    menu.close();
  };
  const actions = useMemo(() => {
    return options.map(option => {
      const isSelected = (selected === null || selected === void 0 ? void 0 : selected.value) === option.value;
      return {
        ...option,
        onClick: () => select(option),
        contentRight: isSelected && React.createElement("div", {
          className: "dot"
        })
      };
    });
  }, [options, selected]);
  return React.createElement("div", {
    className: "hydra-select"
  }, React.createElement("button", {
    onClick: menu.toggle,
    className: classNames(triggerClassName)
  }, typeof triggerChildren === "function" ? triggerChildren(selected) : triggerChildren), React.createElement(Menu, Object.assign({
    actions: actions
  }, menu, menuProps)));
};

const Switch = ({
  className,
  altClass,
  defaultOn,
  toggleControlAltClass,
  toggleControlClassname,
  onChange,
  label,
  layout,
  color
}) => {
  const defaults = useDefaults("Switch");
  const [on, setOn] = useState(defaultOn || false);
  const toggle = useCallback(() => {
    setOn(!on);
    onChange && onChange(!on);
  }, [on]);
  return React.createElement("div", {
    className: classNames(toggleControlAltClass ?? "hydra-toggle-control", layout ?? defaults.layout, toggleControlClassname)
  }, React.createElement("button", {
    onClick: toggle,
    className: classNames(altClass ?? "hydra-switch", generateMods({
      on,
      color: color ?? defaults.color
    }), className)
  }, React.createElement("div", {
    className: "bg"
  })), label && React.createElement("div", {
    className: "label-wrap",
    onClick: toggle
  }, React.createElement("label", null, typeof label === "function" ? label(on) : label)));
};
Switch.defaultProps = {
  layout: "horizontal",
  color: "accent"
};

export { Button, Checkbox, Dropdown, HydraContext, HydraProvider, Menu, SegmentedControl, Select, Switch, defaultConfig, useDynamicPanel, useHydra };
//# sourceMappingURL=index.modern.js.map
