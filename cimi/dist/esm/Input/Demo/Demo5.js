import React from "react";
import Input from "../Input";
export default (function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    placeHolder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    onBtnSearch: function onBtnSearch(v) {
      alert(v);
    }
  }));
});