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
import React, { useState } from 'react';
import Scroll from '..';
export default function LoadingDemo1() {
  var _useState = useState(["1"]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    More = _useState4[0],
    setMore = _useState4[1];
  var fetchData = function fetchData() {
    setMore(true);
    setTimeout(function () {
      setData([].concat(_toConsumableArray(data), [1]));
      setMore(false);
    }, 1000);
  };
  var loadMore = function loadMore() {
    if (!More) {
      fetchData();
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Scroll, {
    loadMore: loadMore,
    More: More
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100px",
      backgroundColor: "#e8f3fe",
      marginBottom: "10px"
    }
  }, "1"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100px",
      backgroundColor: "#e8f3fe",
      marginBottom: "10px"
    }
  }, "2"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100px",
      backgroundColor: "#e8f3fe",
      marginBottom: "10px"
    }
  }, "3"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100px",
      backgroundColor: "#e8f3fe",
      marginBottom: "10px"
    }
  }, "4"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100px",
      backgroundColor: "#e8f3fe",
      marginBottom: "10px"
    }
  }, "5"), data.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      style: {
        height: "100px",
        backgroundColor: "#7dbcfc",
        marginBottom: "10px"
      }
    }, index + 6);
  })));
}