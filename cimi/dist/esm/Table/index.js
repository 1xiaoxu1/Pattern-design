import React, { memo } from 'react';
import "./Table.module.less";
var Table = /*#__PURE__*/memo(function (props) {
  console.log(props);
  var type = props.type,
    columns = props.columns,
    children = props.children,
    show = props.show,
    cell = props.cell;
  return /*#__PURE__*/React.createElement("table", {
    className: [show ? 'table' : 'tables', cell ? 'tab' : 'tables'].join(' ')
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, props.columns.map(function (item) {
    return /*#__PURE__*/React.createElement("th", null, item, " ");
  }))), props.items.map(function (item) {
    return /*#__PURE__*/React.createElement("tbody", {
      key: item.name
    }, /*#__PURE__*/React.createElement("tr", {
      className: "title"
    }, /*#__PURE__*/React.createElement("td", null, item.date, " "), /*#__PURE__*/React.createElement("td", null, " ", item.name, " "), /*#__PURE__*/React.createElement("td", null, item.address, " ")));
  }));
});
export default Table;