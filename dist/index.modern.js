import React, { useRef, useState, useEffect, useCallback, forwardRef, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { useReducedMotion, AnimatePresence, motion } from 'framer-motion';

var useDynamicPanel = function useDynamicPanel() {
  var ref = useRef(null);
  var _useState = useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var handleWindowClick = function handleWindowClick(ev) {
    var _ref$current;
    if (ref.current && typeof ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains) === "function" && !ref.current.contains(ev.target)) {
      close(ev);
    }
  };
  useEffect(function () {
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
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
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

var kebabize = function kebabize(str) {
  return str.replaceAll(" ", "-").split("").map(function (letter, index) {
    if (letter === "-") {
      return "-";
    }
    return letter.toUpperCase() === letter ? "" + (index !== 0 ? "-" : "") + letter.toLowerCase() : letter;
  }).join("");
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

var _excluded = ["altClass", "size", "bg", "onClick", "className", "children"];
var Button = function Button(_ref) {
  var altClass = _ref.altClass,
    size = _ref.size,
    bg = _ref.bg,
    _onClick = _ref.onClick,
    className = _ref.className,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var onClick = function onClick(ev) {
    if (_onClick) _onClick(ev);
  };
  return React.createElement("button", Object.assign({
    className: classNames(altClass != null ? altClass : "hydra-button", generateMods({
      size: size,
      bg: bg
    }), className),
    onClick: onClick
  }, props), children);
};
Button.defaultProps = {
  size: "default",
  bg: "accent"
};

var icons = {
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
    bg = _ref.bg,
    altClass = _ref.altClass,
    className = _ref.className,
    toggleControlAltClass = _ref.toggleControlAltClass,
    toggleControlClassname = _ref.toggleControlClassname;
  var _useState = useState(defaultChecked || false),
    checked = _useState[0],
    setChecked = _useState[1];
  var toggle = useCallback(function () {
    setChecked(!checked);
    onChange && onChange(!checked);
  }, [checked]);
  return React.createElement("div", {
    className: classNames(toggleControlAltClass != null ? toggleControlAltClass : "hydra-toggle-control", toggleControlClassname, layout)
  }, React.createElement("button", {
    onClick: toggle,
    className: classNames(altClass != null ? altClass : "hydra-checkbox", generateMods({
      bg: bg
    }), className),
    "data-checked": checked
  }, checked && React.createElement("i", {
    className: "icon size-5"
  }, icons.check)), label && React.createElement("div", {
    className: "label-wrap",
    onClick: toggle
  }, React.createElement("label", null, typeof label === "function" ? label(checked) : label)));
};
Checkbox.defaultProps = {
  layout: "horizontal"
};

var MenuAction = function MenuAction(_ref) {
  var click = _ref.click,
    label = _ref.label,
    icon = _ref.icon,
    submenuOpen = _ref.submenuOpen,
    config = _ref.config;
  var ref = useRef(null);
  var onClick = function onClick(ev) {
    if (typeof click === "function") {
      click(ev);
    }
  };
  return React.createElement("div", {
    className: "action-wrap"
  }, React.createElement("button", {
    ref: ref,
    onClick: onClick,
    className: classNames("menu-action px-4 py-2-5", generateMods({
      submenuOpen: submenuOpen,
      color: config.color || "gray"
    })),
    role: "menuitem",
    tabIndex: 0
  }, React.createElement("div", {
    className: "action-content"
  }, icon && React.createElement("i", {
    className: "icon size-5"
  }, icon), React.createElement("span", null, label))));
};

var SubmenuItem = function SubmenuItem(_ref) {
  var _actionProps$submenu;
  var actionProps = _ref.actionProps,
    config = _ref.config;
  var _useState = useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var shouldReduceMotion = useReducedMotion();
  var open = function open() {
    return setIsOpen(true);
  };
  var close = function close() {
    return setIsOpen(false);
  };
  return React.createElement("div", {
    className: "wrapper",
    onFocus: open,
    onBlur: close,
    onMouseOver: open,
    onMouseLeave: close
  }, React.createElement(MenuAction, Object.assign({
    submenuOpen: isOpen,
    config: config
  }, actionProps)), React.createElement(AnimatePresence, null, isOpen && React.createElement(motion.div, {
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
  }, React.createElement(MenuActions, {
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
  return React.createElement("div", {
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
      return React.createElement("div", {
        key: action.id,
        className: "separator"
      });
    }
    var actionProps = _extends({
      index: index,
      click: onClick
    }, action);
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

var _excluded$1 = ["isOpen", "close", "actions", "config", "origin", "top", "right", "bottom", "left", "leaveDoesCloseMenu", "actionClickDoesCloseMenu", "className"];
var Menu = forwardRef(function (_ref, ref) {
  var isOpen = _ref.isOpen,
    close = _ref.close,
    actions = _ref.actions,
    config = _ref.config,
    origin = _ref.origin,
    top = _ref.top,
    right = _ref.right,
    bottom = _ref.bottom,
    left = _ref.left,
    leaveDoesCloseMenu = _ref.leaveDoesCloseMenu,
    actionClickDoesCloseMenu = _ref.actionClickDoesCloseMenu,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var _useState = useState(false),
    isAnimating = _useState[0],
    setIsAnimating = _useState[1];
  var shouldReduceMotion = useReducedMotion();
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
    if (leaveDoesCloseMenu) {
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
    className: classNames("hydra-menu", className),
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
    onAnimationStart: function onAnimationStart() {
      return setIsAnimating(true);
    },
    onAnimationComplete: function onAnimationComplete() {
      return setIsAnimating(false);
    },
    onMouseLeave: onMouseLeave
  }, props), React.createElement("div", {
    className: "wfull p-0"
  }, React.createElement(MenuActions, {
    actions: actions,
    actionClickDoesCloseMenu: actionClickDoesCloseMenu,
    close: close,
    config: config != null ? config : {
      color: "default"
    }
  }))));
});
Menu.defaultProps = {
  origin: "top left",
  top: "1rem",
  leaveDoesCloseMenu: false,
  actionClickDoesCloseMenu: true
};

var Dropdown = function Dropdown(_ref) {
  _objectDestructuringEmpty(_ref);
  var menu = useDynamicPanel();
  return React.createElement("div", {
    className: "hydra-dropdown"
  }, React.createElement(Button, {
    onClick: menu.toggle
  }, "Open"), React.createElement(Menu, Object.assign({
    top: 42,
    actions: [{
      label: "Action 1"
    }, {
      label: "Action 2"
    }, {
      label: "Action 3",
      submenu: [{
        label: "Action 1"
      }, {
        label: "Action 2"
      }, {
        label: "Action 3"
      }]
    }, {
      label: "Action 4"
    }]
  }, menu)));
};
Dropdown.defaultProps = {};

var SegmentedControl = function SegmentedControl(_ref) {
  var segments = _ref.segments,
    defaultSelected = _ref.defaultSelected,
    onChange = _ref.onChange,
    mods = _ref.mods,
    altClass = _ref.altClass,
    className = _ref.className;
  var _useState = useState(defaultSelected != null ? defaultSelected : 0),
    selected = _useState[0],
    setSelected = _useState[1];
  var _useState2 = useState({
      width: "auto",
      left: 0
    }),
    indicatorStyle = _useState2[0],
    setIndicatorStyle = _useState2[1];
  var getSegmentID = function getSegmentID(segment) {
    return "segment-" + segment.label.replaceAll(" ", "-");
  };
  useLayoutEffect(function () {
    select(segments[defaultSelected != null ? defaultSelected : 0]);
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
  useEffect(function () {
    if (typeof onChange === "function") {
      onChange(segments[selected]);
    }
  }, [selected]);
  return React.createElement("div", {
    className: classNames(altClass != null ? altClass : "hydra-segmented-control", className, mods),
    onMouseLeave: function onMouseLeave() {
      return select(segments[selected]);
    }
  }, React.createElement("div", {
    className: "indicator",
    style: indicatorStyle
  }), React.createElement("div", {
    className: classNames("controls", (mods === null || mods === void 0 ? void 0 : mods.includes("equal-children")) && "grid-" + segments.length)
  }, segments.map(function (segment, index) {
    var isSelected = selected === index;
    return React.createElement("button", {
      key: segment.label,
      id: getSegmentID(segment),
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
    }, segment.icon && React.createElement("i", {
      className: "icon size-5 mr-1"
    }, segment.icon), React.createElement("span", null, segment.label));
  })));
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
    bg = _ref.bg;
  var _useState = useState(defaultOn || false),
    on = _useState[0],
    setOn = _useState[1];
  var toggle = useCallback(function () {
    setOn(!on);
    onChange && onChange(!on);
  }, [on]);
  return React.createElement("div", {
    className: classNames(toggleControlAltClass != null ? toggleControlAltClass : "hydra-toggle-control", layout, toggleControlClassname)
  }, React.createElement("button", {
    onClick: toggle,
    className: classNames(altClass != null ? altClass : "hydra-switch", generateMods({
      on: on,
      bg: bg
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
  bg: "accent"
};

export { Button, Checkbox, Dropdown, Menu, SegmentedControl, Switch, useDynamicPanel };
//# sourceMappingURL=index.modern.js.map
