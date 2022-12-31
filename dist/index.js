function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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
  return React__default.createElement("button", Object.assign({
    className: classnames(altClass != null ? altClass : "hydra-button", generateMods({
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
  var _useState = React.useState(defaultChecked || false),
    checked = _useState[0],
    setChecked = _useState[1];
  var toggle = React.useCallback(function () {
    setChecked(!checked);
    onChange && onChange(!checked);
  }, [checked]);
  return React__default.createElement("div", {
    className: classnames(toggleControlAltClass != null ? toggleControlAltClass : "hydra-toggle-control", toggleControlClassname, layout)
  }, React__default.createElement("button", {
    onClick: toggle,
    className: classnames(altClass != null ? altClass : "hydra-checkbox", generateMods({
      bg: bg
    }), className),
    "data-checked": checked
  }, checked && React__default.createElement("i", {
    className: "icon size-5"
  }, icons.check)), label && React__default.createElement("div", {
    className: "label-wrap",
    onClick: toggle
  }, React__default.createElement("label", null, typeof label === "function" ? label(checked) : label)));
};
Checkbox.defaultProps = {
  layout: "horizontal"
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
  var _useState = React.useState(defaultOn || false),
    on = _useState[0],
    setOn = _useState[1];
  var toggle = React.useCallback(function () {
    setOn(!on);
    onChange && onChange(!on);
  }, [on]);
  return React__default.createElement("div", {
    className: classnames(toggleControlAltClass != null ? toggleControlAltClass : "hydra-toggle-control", layout, toggleControlClassname)
  }, React__default.createElement("button", {
    onClick: toggle,
    className: classnames(altClass != null ? altClass : "hydra-switch", generateMods({
      on: on,
      bg: bg
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
  bg: "accent"
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Switch = Switch;
//# sourceMappingURL=index.js.map
