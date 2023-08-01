import React from 'react';
import Loading from '..';
export default function LoadingDemo1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: "600px",
      height: "200px"
    }
  }, /*#__PURE__*/React.createElement(Loading, {
    mask: "black",
    loading: true,
    text: "\u62FC\u547D\u52A0\u8F7D\u4E2D...",
    type: "all"
  }));
}