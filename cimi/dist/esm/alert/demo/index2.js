import React from "react";
import Alert from "../index";
export default (function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Alert, {
    type: "success",
    isClose: false,
    handleClose: function handleClose() {
      console.log('这是达拉斯科技计划发动机');
    }
  }, /*#__PURE__*/React.createElement("p", null, "Detailed description and advice about successful copywriting.")), /*#__PURE__*/React.createElement(Alert, {
    type: "error"
  }, /*#__PURE__*/React.createElement("p", null, "This is an error message about copywriting.")), /*#__PURE__*/React.createElement(Alert, {
    type: "warning"
  }, /*#__PURE__*/React.createElement("p", null, "This is a warning notice about copywriting.")), /*#__PURE__*/React.createElement(Alert, {
    type: "info"
  }, /*#__PURE__*/React.createElement("p", null, "Additional description and information about copywriting.")));
});