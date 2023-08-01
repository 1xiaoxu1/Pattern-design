function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
import Css from "./index.module.less";
var Rate = function Rate(_ref) {
  var totalScore = _ref.totalScore,
    score = _ref.score,
    text = _ref.text,
    children = _ref.children,
    readonly = _ref.readonly;
  var _useState = useState(score || 1),
    _useState2 = _slicedToArray(_useState, 2),
    deter = _useState2[0],
    setDeter = _useState2[1]; //设置确定分数   
  var _useState3 = useState(deter),
    _useState4 = _slicedToArray(_useState3, 2),
    rate = _useState4[0],
    setRate = _useState4[1]; //设置分数   
  var arr = new Array(totalScore).fill(children || "⚝");
  // 鼠标移入设置rate评分
  function enterRate(index) {
    if (!readonly) {
      setRate(index + 1);
    }
  }
  // 鼠标移除返回选中评分
  function leaveRate() {
    if (!readonly) {
      setRate(deter);
    }
  }
  // 鼠标点击选中评分
  function choiceRate(index) {
    if (!readonly) {
      setDeter(index + 1);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: Css.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: text ? "block" : "none"
    }
  }, "\u8BC4\u5206:", rate), /*#__PURE__*/React.createElement("ul", {
    className: Css.rateList
  }, arr.map(function (value, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: rate >= index + 1 ? Css.selectChoice : ""
      // 鼠标移入
      ,
      onMouseEnter: function onMouseEnter() {
        enterRate(index);
      }
      // 鼠标移除
      ,
      onMouseLeave: function onMouseLeave() {
        leaveRate();
      }
      // 鼠标点击
      ,
      onClick: function onClick() {
        choiceRate(index);
      }
    }, value);
  })));
};
export default Rate;