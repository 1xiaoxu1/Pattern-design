function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { memo, useState } from 'react';
// import { CloseCircleOutlined, ApiFilled } from '@ant-design/icons';

import css from "./MessageBox.module.less";
var MessageBox = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    message = props.message,
    confirm = props.confirm,
    data = props.data;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var open = function open() {
    setShow(true);
  };
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    name = _useState4[0],
    setName = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    alter = _useState6[0],
    setAlter = _useState6[1];
  var del = function del(e) {
    console.log(e.target);
    var button = document.getElementsByClassName("button___2_FH-")[0];
    var button1 = document.getElementsByClassName("cancle___3SOzf")[0];
    console.log(button);
    if (e.target === button) {
      setName(true);
    } else if (e.target === button1) {
      setName(false);
    } else {
      setName(false);
    }
    setShow(false);
    setAlter(true);
    setTimeout(function () {
      setAlter(false);
    }, 2000);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: css.container
  }, /*#__PURE__*/React.createElement("div", {
    className: css.title,
    onClick: function onClick() {
      return open();
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    className: [css.mask, show === true ? css.show : css.hidden].join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: css.box
  }, /*#__PURE__*/React.createElement("div", {
    className: css.top
  }, /*#__PURE__*/React.createElement("h3", null, message.title), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return del(e);
    }
  }, " x")), /*#__PURE__*/React.createElement("p", {
    className: css.content
  }, message.content), confirm ? /*#__PURE__*/React.createElement("div", {
    className: css.bottom
  }, /*#__PURE__*/React.createElement("button", {
    className: css.button,
    onClick: function onClick(e) {
      return del(e);
    }
  }, message.config), /*#__PURE__*/React.createElement("button", {
    className: css.cancle,
    onClick: function onClick(e) {
      return del(e);
    }
  }, message.cancel)) : /*#__PURE__*/React.createElement("div", {
    className: css.bottom
  }, /*#__PURE__*/React.createElement("button", {
    className: css.button,
    onClick: function onClick(e) {
      return del(e);
    }
  }, message.config)))), confirm ? /*#__PURE__*/React.createElement("div", {
    className: [css.style, alter ? css.show : css.hidden].join(" ")
  }, "action:", name === true ? data.confirm : data.del) : /*#__PURE__*/React.createElement("div", {
    className: [css.alter, alter ? css.show : css.hidden].join(" ")
  }, "action:", name ? data.confirm : data.del));
});
export default MessageBox;