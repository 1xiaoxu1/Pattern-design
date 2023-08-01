import React from 'react';
import Select from '..';
export default function SelectDemo1() {
  var options = [{
    title: 'a',
    state: true
  }, {
    title: 'b',
    state: true
  }, {
    title: 'c',
    state: true
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    options: options
  }));
}