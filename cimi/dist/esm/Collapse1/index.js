function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useRef } from 'react';
// import { RightOutlined} from '@ant-design/icons';

import css from "./Collapse.module.less";
var Collapse = function Collapse(props) {
  var height = props.height,
    options = props.options,
    state = props.state;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    view = _useState2[0],
    setView = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    active = _useState4[0],
    setActive = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    num = _useState6[0],
    setNum = _useState6[1];
  var refs = useRef([]);
  var Collapse = function Collapse(res, index) {
    setActive(res);
    if (res === active) {
      setView(!view);
      console.log(view);
    }
    if (!state) {
      if (refs.current[index].style.height == "") {
        var _refs$current$index;
        refs.current[index].style.height = height + "px";
        console.log((_refs$current$index = refs.current[index]) === null || _refs$current$index === void 0 ? void 0 : _refs$current$index.style.height);
        return;
      }
      if (refs.current[index].style.height === height + "px") {
        var _refs$current$index2;
        console.log(123);
        refs.current[index].style.height = "";
        console.log((_refs$current$index2 = refs.current[index]) === null || _refs$current$index2 === void 0 ? void 0 : _refs$current$index2.style.height);
      }
    }
    if (state) {
      setNum(index);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: css.container
  }, options.map(function (item, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: css.title,
      onClick: function onClick() {
        return Collapse(item.key, index);
      },
      key: item.key
    }, item.title), /*#__PURE__*/React.createElement("div", {
      className: css.content,
      ref: function ref(element) {
        refs.current[index] = element;
      },
      style: state ? {
        height: index == num ? height + "px" : ""
      } : undefined
    }, item.children));
  }));
};
export default Collapse;