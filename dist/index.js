function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));

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
  return React__default.createElement("button", Object.assign({
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
    className: classNames(toggleControlAltClass != null ? toggleControlAltClass : "hydra-toggle-control", layout, toggleControlClassname)
  }, React__default.createElement("button", {
    onClick: toggle,
    className: classNames(altClass != null ? altClass : "hydra-switch", generateMods({
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
exports.Switch = Switch;
//# sourceMappingURL=index.js.map
