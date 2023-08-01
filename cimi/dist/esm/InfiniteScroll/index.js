import React, { memo, useEffect, useRef } from 'react';
import css from "./Scroll.module.less";
var Scroll = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    loadMore = props.loadMore,
    More = props.More;
  var containerRefs = useRef(null);
  useEffect(function () {
    var container = containerRefs.current;
    var handelScroll = function handelScroll() {
      if (container) {
        var isBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 100;
        if (isBottom && !More) {
          console.log("加载中...");
          loadMore();
        }
      }
    };
    container === null || container === void 0 ? void 0 : container.addEventListener("scroll", handelScroll);
    return function () {
      container === null || container === void 0 ? void 0 : container.removeEventListener("scroll", handelScroll);
    };
  }, [loadMore]);
  return /*#__PURE__*/React.createElement("div", {
    className: css.container,
    ref: containerRefs
  }, children);
});
export default Scroll;