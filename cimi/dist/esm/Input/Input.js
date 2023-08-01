function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useRef, useState } from 'react';
import Css from "./Input.module.less";
var Input = function Input(_ref) {
  var widths = _ref.widths,
    size = _ref.size,
    placeHolder = _ref.placeHolder,
    btnhWord = _ref.btnhWord,
    onBtnSearch = _ref.onBtnSearch,
    headerText = _ref.headerText,
    clearIcon = _ref.clearIcon;
  // 点击框子的值
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focusCol = _useState2[0],
    setFocusCol = _useState2[1];
  // 聚焦input输入框的值
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isEnter = _useState4[0],
    setEnter = _useState4[1];
  // 创建input中的ref对象
  var inputEl = useRef();
  var goSearch = function goSearch() {
    if (onBtnSearch) {
      // 如果按钮有事件，发送事件，并传递搜索框的value值
      if (headerText) {
        onBtnSearch("headerText" + inputEl.current.value);
      } else {
        onBtnSearch(inputEl.current.value);
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: Css.wrapper,
    style: {
      width: widths ? widths : "280px",
      //用户传入的宽度
      borderColor: focusCol || isEnter ? 'rgb(64,150,255)' : "rgb(217,217,217)",
      fontSize: size ? size : "16px" //设定大小
    }
    //移入移出变色要素
    ,
    onMouseEnter: function onMouseEnter() {
      setEnter(true);
    },
    onMouseLeave: function onMouseLeave() {
      setEnter(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: "5px",
      display: headerText ? "block" : "none"
    }
  }, headerText), /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: inputEl
    // 选中/不选变色要素
    ,
    onFocus: function onFocus() {
      setFocusCol(true);
    },
    onBlur: function onBlur() {
      setFocusCol(false);
    },
    placeholder: placeHolder ? placeHolder : "",
    style: {
      fontSize: size ? size : "16px" //设定大小
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: clearIcon ? "block" : "none",
      fontSize: size ? size : "16px" //设定大小
    },

    onClick: function onClick() {
      inputEl.current.value = "";
    },
    className: Css.clear
  }, "\xD7"), /*#__PURE__*/React.createElement("button", {
    className: Css.button,
    onClick: goSearch,
    style: {
      fontSize: size ? size : "16px" //设定大小
    }
  }, btnhWord ? btnhWord : "搜索"));
};
export default Input;