function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
import Css from "./index.module.less";
export default (function (_ref) {
  var value = _ref.value,
    activeColor = _ref.activeColor,
    negativeColor = _ref.negativeColor,
    activeWord = _ref.activeWord,
    negativeWord = _ref.negativeWord,
    activeWordColor = _ref.activeWordColor,
    changeHandle = _ref.changeHandle,
    disable = _ref.disable;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var _useState3 = useState(disable || false),
    _useState4 = _slicedToArray(_useState3, 2),
    dis = _useState4[0],
    setDis = _useState4[1];
  var changeValue = function changeValue() {
    if (!dis) {
      // 不是disable时候生效
      setVal(!val); // 处理对错
      if (changeHandle) {
        // 自定义事件
        changeHandle(!val);
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: Css.box
  }, /*#__PURE__*/React.createElement("span", {
    className: Css.activeWord,
    style: {
      color: val ? activeWordColor || "skyblue" : ""
    }
  }, activeWord), /*#__PURE__*/React.createElement("div", {
    className: Css.wrapper,
    onClick: changeValue,
    style: {
      backgroundColor: val ? activeColor || "green" : negativeColor || "red",
      opacity: dis ? 0.5 : 1,
      cursor: dis ? "not-allowed" : ""
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: Css.inner,
    style: {
      left: val ? "3px" : "21px"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: Css.negativeWord,
    style: {
      color: !val ? activeWordColor || "skyblue" : ""
    }
  }, negativeWord));
});