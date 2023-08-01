import React, { memo } from "react";
import Css from "./Divider.module.less";
var Divider = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    Position = props.Position,
    direction = props.direction;
  if (!Position) {
    Position = "middle";
  }
  if (!direction) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: Css.bigBox
    }, children ? /*#__PURE__*/React.createElement("div", {
      className: [Css['box'], Css[Position]].join(' ')
    }, children) : ''));
  } else {
    return /*#__PURE__*/React.createElement("span", {
      className: Css.horizontal
    }, "|");
  }
});
export default Divider;