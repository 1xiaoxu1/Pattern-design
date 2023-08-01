import React from "react";
import Time from "../index";
export default (function () {
  var starthandler = function starthandler(flag) {
    if (flag) {
      console.log(flag);
    }
  };
  var handlerTime = function handlerTime(time) {
    console.log(time);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Time, {
    handler: starthandler,
    WatchTime: handlerTime
  }));
});