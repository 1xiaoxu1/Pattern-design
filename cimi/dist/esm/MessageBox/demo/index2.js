import React from 'react';
import MessageBox from '..';
export default function LoadingDemo1() {
  var message = {
    title: '提示',
    content: '此操作将永久删除改文件,是否继续?',
    config: "确认",
    cancel: "取消"
  };
  var data = {
    del: "已取消删除",
    confirm: "删除成功"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MessageBox, {
    message: message,
    confirm: true,
    data: data
  }, "\u70B9\u51FB\u6253\u5F00 Message Box"));
}