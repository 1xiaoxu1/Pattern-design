import React, { memo } from "react";
import Css from "./Badge.module.less";
var Badge = /*#__PURE__*/memo(function (props) {
  var count = props.count,
    background = props.background,
    backgroundColor = props.backgroundColor,
    color = props.color,
    boxWidth = props.boxWidth,
    boxHeight = props.boxHeight,
    iconWidth = props.iconWidth,
    iconHeight = props.iconHeight,
    fontSize = props.fontSize,
    top = props.top,
    right = props.right;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: Css.box,
    style: {
      backgroundColor: background ? background : '#bfbfbf',
      width: boxWidth ? boxWidth : '50px',
      height: boxHeight ? boxHeight : '50px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: Css.icon,
    style: {
      backgroundColor: backgroundColor ? backgroundColor : "#ff4d4f",
      color: color ? color : "#fff",
      width: iconWidth ? iconWidth : '30px',
      height: iconHeight ? iconHeight : '30px',
      fontSize: fontSize ? fontSize : '14px',
      top: top ? top : '-10px',
      right: right ? right : '-10px'
    }
  }, /*#__PURE__*/React.createElement("span", null, count ? count : "99"))));
});
export default Badge;