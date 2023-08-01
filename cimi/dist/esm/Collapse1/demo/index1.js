import React from 'react';
import Collapse from '..';
export default function ButtonDemo1() {
  var options = [{
    key: 1,
    title: '一致性 Consistency',
    children: /*#__PURE__*/React.createElement("p", null, "One")
  }, {
    key: 2,
    title: '反馈 Feedback',
    children: /*#__PURE__*/React.createElement("p", null, "Two")
  }, {
    key: 3,
    title: '效率 Efficiency',
    children: /*#__PURE__*/React.createElement("p", null, "Three")
  }, {
    key: 4,
    title: '可控 Controllability',
    children: /*#__PURE__*/React.createElement("p", null, "Four")
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Collapse, {
    options: options,
    height: 100
  }));
}