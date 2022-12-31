function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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
  return React.createElement("button", Object.assign({
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

exports.Button = Button;
//# sourceMappingURL=index.js.map
