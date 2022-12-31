import React, { useState, useCallback } from 'react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const kebabize = str => {
  return str.replaceAll(" ", "-").split("").map((letter, index) => {
    if (letter === "-") {
      return "-";
    }
    return letter.toUpperCase() === letter ? `${index !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter;
  }).join("");
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

const Button = ({
  altClass,
  size,
  bg,
  onClick: _onClick,
  className,
  children,
  ...props
}) => {
  const onClick = ev => {
    if (_onClick) _onClick(ev);
  };
  return React.createElement("button", Object.assign({
    className: classnames(altClass ?? "hydra-button", generateMods({
      size,
      bg
    }), className),
    onClick: onClick
  }, props), children);
};
Button.defaultProps = {
  size: "default",
  bg: "accent"
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

const Checkbox = ({
  label,
  layout,
  defaultChecked,
  onChange,
  bg,
  altClass,
  className,
  toggleControlAltClass,
  toggleControlClassname
}) => {
  const [checked, setChecked] = useState(defaultChecked || false);
  const toggle = useCallback(() => {
    setChecked(!checked);
    onChange && onChange(!checked);
  }, [checked]);
  return React.createElement("div", {
    className: classnames(toggleControlAltClass ?? "hydra-toggle-control", toggleControlClassname, layout)
  }, React.createElement("button", {
    onClick: toggle,
    className: classnames(altClass ?? "hydra-checkbox", generateMods({
      bg
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

const Switch = ({
  className,
  altClass,
  defaultOn,
  toggleControlAltClass,
  toggleControlClassname,
  onChange,
  label,
  layout,
  bg
}) => {
  const [on, setOn] = useState(defaultOn || false);
  const toggle = useCallback(() => {
    setOn(!on);
    onChange && onChange(!on);
  }, [on]);
  return React.createElement("div", {
    className: classnames(toggleControlAltClass ?? "hydra-toggle-control", layout, toggleControlClassname)
  }, React.createElement("button", {
    onClick: toggle,
    className: classnames(altClass ?? "hydra-switch", generateMods({
      on,
      bg
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

export { Button, Checkbox, Switch };
//# sourceMappingURL=index.modern.js.map
