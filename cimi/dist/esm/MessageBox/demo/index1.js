import React from 'react';
import MessageBox from '..';
export default function LoadingDemo1() {
  var message = {
    title: '标题名称',
    content: '这是一段内容',
    config: "确认"
  };
  var data = {
    del: "cancel",
    confirm: "confirm"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MessageBox, {
    message: message,
    data: data
  }, "\u70B9\u51FB\u6253\u5F00 Message Box"));
}