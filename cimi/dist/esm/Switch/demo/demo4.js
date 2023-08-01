import React from "react";
import Switch from "../index";
export default (function () {
  return /*#__PURE__*/React.createElement(Switch, {
    value: true,
    changeHandle: function changeHandle(v) {
      alert("触发自定义事件");
    }
  });
});