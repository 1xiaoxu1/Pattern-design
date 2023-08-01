function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useMemo, useState, useRef } from "react";
import Css from "./time.module.less";
export default (function (_ref) {
  var handler = _ref.handler,
    resetHandle = _ref.resetHandle,
    WatchTime = _ref.WatchTime,
    width = _ref.width,
    height = _ref.height;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    flag = _useState4[0],
    setFlag = _useState4[1];
  var timer = useRef();
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    timerArr = _useState6[0],
    setTimeArr = _useState6[1];
  var sec = useMemo(function () {
    return Math.trunc(total / 1000 % 60);
  }, [total]);
  var min = useMemo(function () {
    return Math.trunc(total / 1000 / 60);
  }, [total]);
  var msec = useMemo(function () {
    return Math.trunc(total / 10 % 100);
  }, [total]);
  var time = function time() {
    setFlag(!flag);
    if (!flag) {
      clearInterval(timer.current);
    } else {
      timer.current = setInterval(function () {
        setTotal(function (v) {
          return v + 16.7;
        });
      }, 16.7);
    }
    handler(flag);
  };
  var timerAdd = function timerAdd() {
    var arr = _toConsumableArray(timerArr);
    arr.push("".concat(min < 10 ? "0" + min : min, ":").concat(sec < 10 ? "0" + sec : sec, ":").concat(msec < 10 ? "0" + msec : msec));
    setTimeArr(arr);
    WatchTime(timerArr);
    console.log(timerArr);
  };
  var resetTime = function resetTime() {
    clearInterval(timer.current);
    setTotal(0);
    setTimeArr([]);
    setFlag(true);
    resetHandle ? resetHandle() : function () {};
  };
  return /*#__PURE__*/React.createElement("div", {
    className: Css['bigBox'],
    style: {
      width: width ? width : '400px',
      height: height ? height : '500px'
    }
  }, /*#__PURE__*/React.createElement("h1", null, "\u79D2\u8868"), /*#__PURE__*/React.createElement("div", {
    className: Css['top']
  }, /*#__PURE__*/React.createElement("span", {
    className: Css["min"]
  }, min < 10 ? "0" + min : min), ":", /*#__PURE__*/React.createElement("span", {
    className: Css["sec"]
  }, sec < 10 ? "0" + sec : sec), ":", /*#__PURE__*/React.createElement("span", {
    className: Css["msec"]
  }, msec < 10 ? "0" + msec : msec)), /*#__PURE__*/React.createElement("div", {
    className: Css["center"]
  }, /*#__PURE__*/React.createElement("button", {
    onClick: time
  }, flag ? "开始" : "结束"), /*#__PURE__*/React.createElement("button", {
    onClick: timerAdd,
    disabled: flag
  }, "\u5206\u6BB5"), /*#__PURE__*/React.createElement("button", {
    onClick: resetTime
  }, "\u91CD\u7F6E")), /*#__PURE__*/React.createElement("div", {
    className: Css["footer"]
  }, timerArr.map(function (item, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index
    }, /*#__PURE__*/React.createElement("span", null, "\u7B2C", index + 1, "\u6BB5"), /*#__PURE__*/React.createElement("span", null, "\u65F6\u95F4\uFF1A", item));
  })));
});