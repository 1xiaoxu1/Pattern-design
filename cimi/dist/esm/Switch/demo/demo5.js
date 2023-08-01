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
    disable: true
  }), /*#__PURE__*/React.createElement(Switch, {
    value: true
  }));
});