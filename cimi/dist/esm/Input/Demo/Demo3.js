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
    placeHolder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
  }), /*#__PURE__*/React.createElement(Input, {
    btnhWord: "search"
  }), /*#__PURE__*/React.createElement(Input, {
    headerText: "http://"
  }));
});