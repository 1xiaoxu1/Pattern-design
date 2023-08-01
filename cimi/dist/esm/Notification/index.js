//useMemo 用来缓存计算结果 依赖项发生变化时会重新计算
import React, { memo, useMemo, useRef, useEffect } from "react";
import "./Notification.module.less";
var Not = /*#__PURE__*/memo(function (props) {
  // console.log(props);

  var type = props.type,
    width = props.width,
    height = props.height,
    duration = props.duration,
    children = props.children;
  var NotStyle = useMemo(function () {
    if (!type && type !== 'topLeft') {
      return 'navs';
    }
    return type;
  }, [type]);

  // 点击按钮出现
  function onchange() {
    if (divref.current) {
      divref.current.hidden = false;
    }
    console.log(divref);
    // 如果duration存在 执行延时器
    if (duration) {
      setTimeout(function () {
        if (divref.current) {
          divref.current.hidden = true;
        }
      }, duration);
    }
  }
  // 初始化的时候 隐藏
  useEffect(function () {
    if (divref.current) {
      divref.current.hidden = true;
    }
  }, []);
  var divref = useRef(null);
  //  点击x 消失
  function change() {
    // console.log(divref.current.hidden);
    if (divref.current) {
      divref.current.hidden = true;
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return onchange();
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    className: NotStyle,
    ref: divref
  }, /*#__PURE__*/React.createElement("div", {
    className: "error",
    onClick: function onClick() {
      return change();
    }
  }, "x"), /*#__PURE__*/React.createElement("h3", null, props.message, " "), /*#__PURE__*/React.createElement("div", null, props.description, " ")));
});
export default Not;