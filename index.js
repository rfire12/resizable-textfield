"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DynamicTextField = function DynamicTextField(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles;
  // Styles
  var txtStyles = {
    textfield: {
      border: "2px solid rgb(9, 123, 199)",
      borderRadius: "3px",
      color: "white",
      display: "inline-block",
      fontFamily: "sans-serif",
      fontSize: "1.2em",
      fontWeight: "bolder",
      margin: "0",
      outline: "none",
      padding: "5px 15px",
      position: "absolute",
      transform: "translate(0%, 0%)",
      whiteSpace: "pre-wrap"
    },
    textfieldSpan: {
      border: "0",
      visibility: "hidden"
    },
    textfieldInput: {
      color: "black",
      padding: "3px 15px"
    }
  };

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      textFieldValue = _useState2[0],
      setTextFieldValue = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      titleWidth = _useState4[0],
      setTitleWidth = _useState4[1];

  var titleSpanRef = (0, _react.useRef)(null);
  var titleInputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setTitleWidth("".concat(titleSpanRef.current.offsetWidth - 29, "px"));
  }, [textFieldValue]);
  return _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    ref: titleInputRef,
    value: textFieldValue,
    autoComplete: "off",
    spellCheck: false,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return setTextFieldValue(e.currentTarget.value);
    },
    style: _objectSpread({}, txtStyles.textfield, {}, txtStyles.textfieldInput, {}, styles, {
      width: titleWidth
    })
  }), _react["default"].createElement("span", {
    ref: titleSpanRef,
    style: _objectSpread({}, txtStyles.textfield, {}, txtStyles.textfieldSpan)
  }, textFieldValue === "" ? placeholder : textFieldValue));
};

DynamicTextField.propTypes = {
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  style: _propTypes["default"].object,
  atLeatOneRequired: function atLeatOneRequired(props) {
    if (props.value === undefined && props.placeholder === undefined) {
      return new Error("At least 'value' or 'placeholder' must be provided");
    }
  }
};
var _default = DynamicTextField;
exports["default"] = _default;