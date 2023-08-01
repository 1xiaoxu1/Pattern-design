import React, { useMemo, memo } from 'react';
import "./Container.module.less";
export var Container = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    height = props.height,
    children = props.children;
  var containerStyle = useMemo(function () {
    if (!type && type !== "style") {
      return "or-container";
    }
    return type;
  }, [type]);
  var containerSize = useMemo(function () {
    var size = {
      width: '100%'
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    className: containerStyle,
    style: containerSize
  }, children);
});
export var Header = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    height = props.height,
    children = props.children;
  var containerStyle = useMemo(function () {
    return type;
  }, [type]);
  var headerSize = useMemo(function () {
    var size = {
      // width: '100px',
      // height: '40px',
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    className: "or-header",
    style: headerSize
  }, children);
});
export var Aside = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    height = props.height,
    children = props.children;
  var containerStyle = useMemo(function () {
    return type;
  }, [type]);
  var asideSize = useMemo(function () {
    var size = {
      width: '200px'
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    className: "or-aside",
    style: asideSize
  }, children);
});
export var Main = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    height = props.height,
    children = props.children;
  var containerStyle = useMemo(function () {
    return type;
  }, [type]);
  var mainSize = useMemo(function () {
    var size = {
      width: '100%'
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    className: "or-main",
    style: mainSize
  }, children);
});
export var Footer = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    height = props.height,
    children = props.children;
  var containerStyle = useMemo(function () {
    return type;
  }, [type]);
  var footerSize = useMemo(function () {
    var size = {
      width: '100%'
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    className: "or-footer",
    style: footerSize
  }, children);
});