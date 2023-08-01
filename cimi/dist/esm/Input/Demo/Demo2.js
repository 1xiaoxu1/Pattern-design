import React from "react";
import Input from "../Input";
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    widths: "200px",
    size: "12px"
  }), /*#__PURE__*/React.createElement(Input, null), /*#__PURE__*/React.createElement(Input, {
    widths: "350px",
    size: "20px"
  }));
});