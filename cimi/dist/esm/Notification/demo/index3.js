import React from 'react';
import Notification from '..';
export default function index2() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Notification, {
    description: "通知内容",
    message: "标题",
    duration: 3000,
    type: "topLeft"
  }, "\u5DE6\u4E0A\u89D2"), /*#__PURE__*/React.createElement(Notification, {
    description: "通知内容",
    message: "标题",
    duration: 3000,
    type: "topRight"
  }, "\u53F3\u4E0A\u89D2"), /*#__PURE__*/React.createElement(Notification, {
    description: "通知内容",
    message: "标题",
    duration: 3000,
    type: "bottomLeft"
  }, "\u5DE6\u4E0B\u89D2"), /*#__PURE__*/React.createElement(Notification, {
    description: "通知内容",
    message: "标题",
    duration: 3000,
    type: "bottomRight"
  }, "\u53F3\u4E0B\u89D2"));
}