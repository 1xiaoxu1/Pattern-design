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
    loading: true
  }));
}