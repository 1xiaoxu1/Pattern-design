import React from "react";
import Switch from "../index";
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    value: true
  }), /*#__PURE__*/React.createElement(Switch, {
    value: true,
    activeColor: "rgb(64,158,255)",
    negativeColor: "rgb(220,223,230)"
  }), /*#__PURE__*/React.createElement(Switch, {
    value: true,
    activeColor: "rgb(210,170,249)",
    negativeColor: "rgb(0,0,0)"
  }));
});