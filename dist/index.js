function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var framerMotion = require('framer-motion');
var solid = require('@heroicons/react/20/solid');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var defaultConfig = {
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

var HydraContext = React.createContext(_extends({}, defaultConfig));
var HydraProvider = function HydraProvider(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? defaultConfig : _ref$config,
    children = _ref.children;
  var value = _extends({}, defaultConfig, config);
  return React__default.createElement(HydraContext.Provider, {
    value: value
  }, children);
};

var useHydra = function useHydra() {
  var context = React.useContext(HydraContext);
  return context;
};

var useDynamicPanel = function useDynamicPanel() {
  var ref = React.useRef(null);
  var _useState = React.useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var handleWindowClick = function handleWindowClick(ev) {
    var _ref$current;
    if (ref.current && typeof ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains) === "function" && !ref.current.contains(ev.target)) {
      close(ev);
    }
  };
  React.useEffect(function () {
    if (typeof window !== "undefined" && ref.current && isOpen) {
      window.addEventListener("click", handleWindowClick);
    }
    return function () {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [ref.current, isOpen]);
  var open = function open(ev) {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(true);
  };
  var close = function close(ev) {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(false);
  };
  var toggle = function toggle(ev) {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(function (isOpen) {
      return !isOpen;
    });
  };
  return {
    ref: ref,
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle
  };
};

var useDefaults = function useDefaults(key) {
  var _useHydra = useHydra(),
    defaultProps = _useHydra.defaultProps;
  return _extends({}, defaultProps[key], defaultConfig.defaultProps[key]);
};

var kebabize = function kebabize(str) {
  return str.replaceAll(" ", "-").split("").map(function (letter, index) {
    if (letter === "-") {
      return "-";
    }
    return letter.toUpperCase() === letter ? "" + (index !== 0 ? "-" : "") + letter.toLowerCase() : letter;
  }).join("");
};
var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

var generateMods = function generateMods(mods) {
  var keys = Object.keys(mods);
  if (keys.length === 0) {
    return "";
  }
  return keys.map(function (key) {
    var value = mods[key];
    if (value === true) {
      return kebabize(key);
    }
    if (!value) {
      return "";
    }
    return kebabize(key) + "-" + (typeof value === "number" ? value : kebabize(value));
  });
};

var omitFields = function omitFields(object, fields) {
  return Object.assign({}, object, Object.assign.apply(Object, [{}].concat(fields.map(function (key) {
    var _ref;
    return _ref = {}, _ref[key] = undefined, _ref;
  }))));
};

var _excluded = ["variant", "color", "size", "rounded", "onClick", "altClass", "className", "children"];
var Button = function Button(_ref) {
  var _ref2;
  var variant = _ref.variant,
    color = _ref.color,
    size = _ref.size,
    rounded = _ref.rounded,
    _onClick = _ref.onClick,
    altClass = _ref.altClass,
    className = _ref.className,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var defaults = useDefaults("Button");
  var onClick = function onClick(ev) {
    if (_onClick) _onClick(ev);
    if (typeof defaults.onClick === "function") defaults.onClick(ev);
  };
  return React__default.createElement("button", Object.assign({
    className: classNames((_ref2 = altClass != null ? altClass : defaults.altClass) != null ? _ref2 : "hydra-button", generateMods({
      variant: variant,
      color: color != null ? color : defaults.color,
      size: size != null ? size : defaults.size,
      rounded: rounded
    }), className, defaults.className),
    onClick: onClick
  }, props, defaults.extras), children);
};

var icons = {
  check: React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, React__default.createElement("path", {
    d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
  }))
};

var variants = {
  fade: {
    "default": {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    },
    "in": {
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
var transition = {
  tween: function tween(duration, delay) {
    if (duration === void 0) {
      duration = 0.5;
    }
    if (delay === void 0) {
      delay = 0;
    }
    return {
      type: "tween",
      duration: duration,
      delay: delay
    };
  },
  spring: function spring(duration, delay, _ref) {
    if (duration === void 0) {
      duration = 0.5;
    }
    if (delay === void 0) {
      delay = 0;
    }
    var _ref$stiffness = _ref.stiffness,
      stiffness = _ref$stiffness === void 0 ? 100 : _ref$stiffness,
      _ref$damping = _ref.damping,
      damping = _ref$damping === void 0 ? 100 : _ref$damping;
    return {
      type: "spring",
      duration: duration,
      delay: delay,
      stiffness: stiffness,
      damping: damping
    };
  },
  ui: {
    menu: {
      type: "spring",
      duration: 0.3
    }
  }
};

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
    layout = _ref.layout,
    defaultChecked = _ref.defaultChecked,
    onChange = _ref.onChange,
    color = _ref.color,
    altClass = _ref.altClass,
    className = _ref.className,
    toggleControlAltClass = _ref.toggleControlAltClass,
    toggleControlClassname = _ref.toggleControlClassname;
  var defaults = useDefaults("Checkbox");
  var _useState = React.useState(defaultChecked || false),
    checked = _useState[0],
    setChecked = _useState[1];
  var toggle = React.useCallback(function () {
    setChecked(!checked);
    onChange && onChange(!checked);
  }, [checked]);
  return React__default.createElement("div", {
    className: classNames(toggleControlAltClass != null ? toggleControlAltClass : "hydra-toggle-control", toggleControlClassname, layout != null ? layout : defaults.layout)
  }, React__default.createElement("button", {
    onClick: toggle,
    className: classNames(altClass != null ? altClass : "hydra-checkbox", generateMods({
      color: color != null ? color : defaults.color
    }), className),
    "data-checked": checked
  }, checked && React__default.createElement("i", {
    className: "icon size-5"
  }, icons.check)), label && React__default.createElement("div", {
    className: "label-wrap",
    onClick: toggle
  }, React__default.createElement("label", null, typeof label === "function" ? label(checked) : label)));
};

var MenuAction = function MenuAction(_ref) {
  var _onClick = _ref.onClick,
    label = _ref.label,
    iconLeft = _ref.iconLeft,
    iconRight = _ref.iconRight,
    contentRight = _ref.contentRight,
    submenuOpen = _ref.submenuOpen,
    config = _ref.config;
  var ref = React.useRef(null);
  var onClick = function onClick(ev) {
    if (typeof _onClick === "function") {
      _onClick(ev);
    }
  };
  return React__default.createElement("div", {
    className: "action-wrap"
  }, React__default.createElement("button", {
    ref: ref,
    onClick: onClick,
    className: classNames("menu-action px-4 py-2-5", generateMods({
      submenuOpen: submenuOpen,
      color: config.color || "gray"
    })),
    role: "menuitem",
    tabIndex: 0
  }, React__default.createElement("div", {
    className: "action-content"
  }, React__default.createElement("div", {
    className: "wfull SBStack"
  }, React__default.createElement("div", {
    className: "HStack"
  }, iconLeft && React__default.createElement("div", {
    className: "relative"
  }, React__default.createElement("i", {
    className: "icon size-5"
  }, iconLeft)), React__default.createElement("span", null, label)), React__default.createElement("div", {
    className: "HStack"
  }, iconRight && React__default.createElement("div", {
    className: "relative flex-c"
  }, React__default.createElement("i", {
    className: "icon size-5"
  }, iconRight)), contentRight)))));
};

var SubmenuItem = function SubmenuItem(_ref) {
  var _actionProps$submenu;
  var actionProps = _ref.actionProps,
    config = _ref.config;
  var _useState = React.useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var shouldReduceMotion = framerMotion.useReducedMotion();
  var open = function open() {
    return setIsOpen(true);
  };
  var close = function close() {
    return setIsOpen(false);
  };
  var props = omitFields(actionProps, ["onClick"]);
  return React__default.createElement("div", {
    className: "wrapper",
    onFocus: open,
    onBlur: close,
    onMouseOver: open,
    onMouseLeave: close
  }, React__default.createElement(MenuAction, Object.assign({
    submenuOpen: isOpen,
    config: config,
    iconRight: React__default.createElement(solid.ChevronRightIcon, null),
    onClick: function onClick(ev) {
      ev === null || ev === void 0 ? void 0 : ev.preventDefault();
      if (typeof actionProps.onClick === "function") {
        actionProps.onClick(ev);
      }
    }
  }, props)), React__default.createElement(framerMotion.AnimatePresence, null, isOpen && React__default.createElement(framerMotion.motion.div, {
    variants: variants.fade["in"].right,
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
  }, React__default.createElement(MenuActions, {
    actions: (_actionProps$submenu = actionProps.submenu) != null ? _actionProps$submenu : [],
    actionClickDoesCloseMenu: true,
    close: close,
    config: config
  }))));
};

var MenuActions = function MenuActions(_ref) {
  var actions = _ref.actions,
    actionClickDoesCloseMenu = _ref.actionClickDoesCloseMenu,
    close = _ref.close,
    config = _ref.config;
  return React__default.createElement("div", {
    className: "w-100p actions",
    role: "none"
  }, actions.map(function (action, index) {
    var onClick = function onClick(ev) {
      if (actionClickDoesCloseMenu && action.clickDoesCloseMenu !== false) {
        close();
      }
      if (typeof action.onClick === "function") {
        action.onClick(ev);
      }
    };
    if (action.label === "separator") {
      return React__default.createElement("div", {
        key: action.id,
        className: "separator"
      });
    }
    var _actionProps = omitFields(_extends({
      index: index
    }, action), ["onClick"]);
    var actionProps = _extends({}, _actionProps, {
      onClick: onClick
    });
    if (action.submenu) {
      return React__default.createElement(SubmenuItem, {
        key: action.label,
        actionProps: actionProps,
        config: config
      });
    }
    return React__default.createElement(MenuAction, Object.assign({
      key: action.label,
      config: config
    }, actionProps));
  }));
};

var _excluded$1 = ["isOpen", "close", "actions", "config", "origin", "top", "right", "bottom", "left", "actionSize", "itemsBordered", "leaveDoesCloseMenu", "actionClickDoesCloseMenu", "className"];
var Menu = React.forwardRef(function (_ref, ref) {
  var isOpen = _ref.isOpen,
    close = _ref.close,
    actions = _ref.actions,
    config = _ref.config,
    origin = _ref.origin,
    top = _ref.top,
    right = _ref.right,
    bottom = _ref.bottom,
    left = _ref.left,
    actionSize = _ref.actionSize,
    itemsBordered = _ref.itemsBordered,
    leaveDoesCloseMenu = _ref.leaveDoesCloseMenu,
    actionClickDoesCloseMenu = _ref.actionClickDoesCloseMenu,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var defaults = useDefaults("Menu");
  var _useState = React.useState(false),
    isAnimating = _useState[0],
    setIsAnimating = _useState[1];
  var shouldReduceMotion = framerMotion.useReducedMotion();
  var getPositionValue = function getPositionValue(value) {
    if (typeof value === "undefined") {
      return "auto";
    }
    if (typeof value === "boolean") {
      return "0";
    }
    if (typeof value === "number") {
      return value + "px";
    }
    return value;
  };
  var onMouseLeave = function onMouseLeave() {
    if (leaveDoesCloseMenu != null ? leaveDoesCloseMenu : defaults.leaveDoesCloseMenu) {
      close();
    }
  };
  return React__default.createElement(framerMotion.AnimatePresence, null, isOpen && React__default.createElement(framerMotion.motion.div, Object.assign({
    ref: ref,
    variants: variants.scale.subtle,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: shouldReduceMotion ? {
      duration: 0
    } : transition.ui.menu,
    className: classNames("hydra-menu", className, generateMods({
      actionSize: actionSize != null ? actionSize : defaults.actionSize,
      itemsBordered: itemsBordered
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
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    },
    onAnimationStart: function onAnimationStart() {
      return setIsAnimating(true);
    },
    onAnimationComplete: function onAnimationComplete() {
      return setIsAnimating(false);
    },
    onMouseLeave: onMouseLeave
  }, props), React__default.createElement("div", {
    className: "wfull p-0"
  }, React__default.createElement(MenuActions, {
    actions: actions,
    actionClickDoesCloseMenu: actionClickDoesCloseMenu != null ? actionClickDoesCloseMenu : defaults.actionClickDoesCloseMenu,
    close: close,
    config: config != null ? config : {
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

var Dropdown = function Dropdown(_ref) {
  var actions = _ref.actions,
    menuProps = _ref.menuProps;
  var menu = useDynamicPanel();
  return React__default.createElement("div", {
    className: "hydra-dropdown"
  }, React__default.createElement(Button, {
    onClick: menu.toggle,
    size: "sm"
  }, "Open"), React__default.createElement(Menu, Object.assign({
    top: (menuProps === null || menuProps === void 0 ? void 0 : menuProps.top) || 42,
    actions: actions
  }, menu, menuProps)));
};

var SegmentedControl = function SegmentedControl(_ref) {
  var segments = _ref.segments,
    defaultSelected = _ref.defaultSelected,
    onChange = _ref.onChange,
    altClass = _ref.altClass,
    className = _ref.className,
    iconsOnly = _ref.iconsOnly;
  var defaults = useDefaults("SegmentedControl");
  var _useState = React.useState(undefined),
    selected = _useState[0],
    setSelected = _useState[1];
  var _useState2 = React.useState({
      width: "auto",
      left: 0
    }),
    indicatorStyle = _useState2[0],
    setIndicatorStyle = _useState2[1];
  var getSegmentID = function getSegmentID(segment) {
    return "segment-" + segment.label.replaceAll(" ", "-");
  };
  React.useEffect(function () {
    if (selected === undefined) {
      select(segments[defaultSelected != null ? defaultSelected : 0]);
    }
  }, [defaultSelected]);
  var select = function select(segment) {
    var _elem$offsetWidth, _elem$offsetLeft;
    setSelected(segments.indexOf(segment));
    var elem = document.getElementById(getSegmentID(segment));
    setIndicatorStyle({
      width: (_elem$offsetWidth = elem === null || elem === void 0 ? void 0 : elem.offsetWidth) != null ? _elem$offsetWidth : "auto",
      left: (_elem$offsetLeft = elem === null || elem === void 0 ? void 0 : elem.offsetLeft) != null ? _elem$offsetLeft : 0
    });
  };
  React.useEffect(function () {
    if (typeof onChange === "function") {
      onChange(segments[selected || 0]);
    }
  }, [selected]);
  return React__default.createElement("div", {
    className: classNames(altClass != null ? altClass : "hydra-segmented-control", className, generateMods({
      iconsOnly: iconsOnly != null ? iconsOnly : defaults.iconsOnly
    })),
    onMouseLeave: function onMouseLeave() {
      return select(segments[selected || 0]);
    }
  }, React__default.createElement("div", {
    className: "indicator",
    style: indicatorStyle
  }), React__default.createElement("div", {
    className: classNames("controls")
  }, segments.map(function (segment, index) {
    var isSelected = selected === index;
    return React__default.createElement("button", {
      key: segment.label,
      id: getSegmentID(segment),
      title: capitalize(segment.label),
      className: classNames("segment", generateMods({
        isSelected: isSelected
      })),
      onClick: function onClick() {
        return select(segment);
      },
      onMouseOver: function onMouseOver() {
        var _elem$offsetWidth2, _elem$offsetLeft2;
        var elem = document.getElementById(getSegmentID(segment));
        setIndicatorStyle({
          width: (_elem$offsetWidth2 = elem === null || elem === void 0 ? void 0 : elem.offsetWidth) != null ? _elem$offsetWidth2 : "auto",
          left: (_elem$offsetLeft2 = elem === null || elem === void 0 ? void 0 : elem.offsetLeft) != null ? _elem$offsetLeft2 : 0
        });
      }
    }, segment.icon && React__default.createElement("i", {
      className: "icon size-5 mr-1"
    }, segment.icon), React__default.createElement("span", null, segment.label));
  })));
};

var Select = function Select(_ref) {
  var options = _ref.options,
    defaultSelected = _ref.defaultSelected,
    onChange = _ref.onChange,
    triggerChildren = _ref.triggerChildren,
    triggerClassName = _ref.triggerClassName,
    menuProps = _ref.menuProps;
  var menu = useDynamicPanel();
  var _React$useState = React__default.useState(defaultSelected || options[0]),
    selected = _React$useState[0],
    setSelected = _React$useState[1];
  var select = function select(option) {
    setSelected(option);
    if (typeof onChange === "function") {
      onChange(option);
    }
    menu.close();
  };
  var actions = React.useMemo(function () {
    return options.map(function (option) {
      var isSelected = (selected === null || selected === void 0 ? void 0 : selected.value) === option.value;
      return _extends({}, option, {
        onClick: function onClick() {
          return select(option);
        },
        contentRight: isSelected && React__default.createElement("div", {
          className: "dot"
        })
      });
    });
  }, [options, selected]);
  return React__default.createElement("div", {
    className: "hydra-select"
  }, React__default.createElement("button", {
    onClick: menu.toggle,
    className: classNames(triggerClassName)
  }, typeof triggerChildren === "function" ? triggerChildren(selected) : triggerChildren), React__default.createElement(Menu, Object.assign({
    actions: actions
  }, menu, menuProps)));
};

var Switch = function Switch(_ref) {
  var className = _ref.className,
    altClass = _ref.altClass,
    defaultOn = _ref.defaultOn,
    toggleControlAltClass = _ref.toggleControlAltClass,
    toggleControlClassname = _ref.toggleControlClassname,
    onChange = _ref.onChange,
    label = _ref.label,
    layout = _ref.layout,
    color = _ref.color;
  var defaults = useDefaults("Switch");
  var _useState = React.useState(defaultOn || false),
    on = _useState[0],
    setOn = _useState[1];
  var toggle = React.useCallback(function () {
    setOn(!on);
    onChange && onChange(!on);
  }, [on]);
  return React__default.createElement("div", {
    className: classNames(toggleControlAltClass != null ? toggleControlAltClass : "hydra-toggle-control", layout != null ? layout : defaults.layout, toggleControlClassname)
  }, React__default.createElement("button", {
    onClick: toggle,
    className: classNames(altClass != null ? altClass : "hydra-switch", generateMods({
      on: on,
      color: color != null ? color : defaults.color
    }), className)
  }, React__default.createElement("div", {
    className: "bg"
  })), label && React__default.createElement("div", {
    className: "label-wrap",
    onClick: toggle
  }, React__default.createElement("label", null, typeof label === "function" ? label(on) : label)));
};
Switch.defaultProps = {
  layout: "horizontal",
  color: "accent"
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Dropdown = Dropdown;
exports.HydraContext = HydraContext;
exports.HydraProvider = HydraProvider;
exports.Menu = Menu;
exports.SegmentedControl = SegmentedControl;
exports.Select = Select;
exports.Switch = Switch;
exports.defaultConfig = defaultConfig;
exports.useDynamicPanel = useDynamicPanel;
exports.useHydra = useHydra;
//# sourceMappingURL=index.js.map
