import React from "react";
import Css from "./MessageBox.module.less";
export default (function (_ref) {
  var title = _ref.title,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel,
    children = _ref.children,
    onFocus = _ref.onFocus,
    isFlag = _ref.isFlag;
  if (isFlag) {
    return /*#__PURE__*/React.createElement("div", {
      className: [Css['bigbox'], isFlag ? Css['maskLarge'] : Css['maskLittle']].join(' ')
    }, /*#__PURE__*/React.createElement("div", {
      className: [Css['modal'], isFlag ? Css['abc'] : Css['def']].join(' ')
    }, /*#__PURE__*/React.createElement("div", {
      className: Css['line']
    }, /*#__PURE__*/React.createElement("h3", null, title ? title : 'Modal Title'), /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        return onFocus();
      }
    }, "x")), /*#__PURE__*/React.createElement("div", {
      className: Css['conent']
    }, children ? children : 'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.'), /*#__PURE__*/React.createElement("div", {
      className: Css['button']
    }, /*#__PURE__*/React.createElement("button", {
      className: Css['confirm'],
      onClick: onOk
    }, "\u786E\u8BA4"), /*#__PURE__*/React.createElement("button", {
      className: Css['cancel'],
      onClick: onCancel
    }, "\u53D6\u6D88"))));
  } else {
    return null;
  }
});