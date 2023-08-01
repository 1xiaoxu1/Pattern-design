function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
import MessageBox from "../MessageBox";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    flag = _useState2[0],
    setFlag = _useState2[1];
  var changeShow = function changeShow() {
    console.log(flag);
    setFlag(!flag);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MessageBox, {
    title: /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, "Modal Title"),
    isFlag: flag,
    onOk: function onOk() {
      setFlag(false);
    },
    onCancel: function onCancel() {
      setFlag(false);
    },
    onFocus: function onFocus() {
      changeShow();
      console.log('点击x按钮触发事件');
    }
  }, "You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return changeShow();
    },
    style: {
      backgroundColor: '#3c7eff',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none'
    }
  }, "\u70B9\u51FB\u663E\u793A"));
});