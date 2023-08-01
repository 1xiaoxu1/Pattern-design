import React from "react";
import Switch from "../index";
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    value: true,
    activeWord: "\u6309\u6708\u7EED\u8D39",
    negativeWord: "\u6309\u5E74\u7EED\u8D39"
  }), /*#__PURE__*/React.createElement(Switch, {
    value: true,
    activeWord: "\u6309\u6708\u7EED\u8D39",
    negativeWord: "\u6309\u5E74\u7EED\u8D39",
    activeWordColor: "green"
  }));
});