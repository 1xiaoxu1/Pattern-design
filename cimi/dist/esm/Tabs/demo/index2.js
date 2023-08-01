import React from 'react';
import Tab from '..';
export default function TabDemo1() {
  var option = [{
    title: "用户管理",
    Id: 1,
    component: /*#__PURE__*/React.createElement("div", null, " \u7528\u6237\u7BA1\u7406")
  }, {
    title: "配置管理",
    Id: 2,
    component: /*#__PURE__*/React.createElement("div", null, " \u914D\u7F6E\u7BA1\u7406")
  }, {
    title: "角色管理",
    Id: 3,
    component: /*#__PURE__*/React.createElement("div", null, " \u89D2\u8272\u7BA1\u7406")
  }, {
    title: "定时任务补偿",
    Id: 4,
    component: /*#__PURE__*/React.createElement("div", null, " \u5B9A\u65F6\u4EFB\u52A1\u8865\u507F")
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tab, {
    option: option,
    style: true
  }));
}