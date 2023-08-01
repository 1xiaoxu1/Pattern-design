import React, { memo } from 'react';
import css from "./Loading.module.less";
var Loading = /*#__PURE__*/memo(function (props) {
  var text = props.text,
    children = props.children,
    mask = props.mask,
    loading = props.loading,
    all = props.all;
  return /*#__PURE__*/React.createElement("div", {
    className: [mask === 'white' ? css.white : css.black, loading === true ? css.show : css.hidden, all === true ? css.all : css.single].join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: css.content
  }, children ? children[0] : /*#__PURE__*/React.createElement("div", {
    className: css.icon
  }), text ? text : ''));
});
export default Loading;