import React from 'react';
import TreeStyle from '..';
import { AccountBookOutlined, RocketOutlined, SolutionOutlined, AimOutlined, StarOutlined, HeartOutlined, AppstoreAddOutlined, BugOutlined, FileWordOutlined, CiCircleOutlined, CarOutlined, ContainerOutlined, ExperimentOutlined, FireOutlined } from '@ant-design/icons';
export default function TreeDemo1() {
  var data = [{
    id: 1,
    name: "one",
    icon: /*#__PURE__*/React.createElement(AccountBookOutlined, {
      style: {
        marginRight: "10px"
      }
    }),
    children: [{
      id: 1 - 1,
      name: '1-1',
      icon: /*#__PURE__*/React.createElement(AimOutlined, {
        style: {
          marginRight: "10px"
        }
      }),
      children: [{
        id: 1 - 1 - 1,
        name: '1-1-1',
        icon: /*#__PURE__*/React.createElement(AppstoreAddOutlined, {
          style: {
            marginRight: "10px"
          }
        })
      }]
    }]
  }, {
    id: 2,
    name: "two",
    icon: /*#__PURE__*/React.createElement(BugOutlined, {
      style: {
        marginRight: "10px"
      }
    }),
    children: [{
      id: 2 - 1,
      name: '2-1',
      icon: /*#__PURE__*/React.createElement(CiCircleOutlined, {
        style: {
          marginRight: "10px"
        }
      }),
      children: [{
        id: 2 - 1 - 1,
        name: '2-1-1',
        icon: /*#__PURE__*/React.createElement(CarOutlined, {
          style: {
            marginRight: "10px"
          }
        })
      }]
    }, {
      id: 2 - 2,
      name: '2-2',
      icon: /*#__PURE__*/React.createElement(ContainerOutlined, {
        style: {
          marginRight: "10px"
        }
      }),
      children: [{
        id: 2 - 2 - 1,
        name: '2-2-1',
        icon: /*#__PURE__*/React.createElement(ExperimentOutlined, {
          style: {
            marginRight: "10px"
          }
        })
      }]
    }]
  }, {
    id: 3,
    name: "Three",
    icon: /*#__PURE__*/React.createElement(FireOutlined, {
      style: {
        marginRight: "10px"
      }
    }),
    children: [{
      id: 3 - 1,
      name: '3-1',
      icon: /*#__PURE__*/React.createElement(FileWordOutlined, {
        style: {
          marginRight: "10px"
        }
      }),
      children: [{
        id: 3 - 1 - 1,
        name: '3-1-1',
        icon: /*#__PURE__*/React.createElement(HeartOutlined, {
          style: {
            marginRight: "10px"
          }
        })
      }]
    }, {
      id: 3 - 2,
      name: '3-2',
      icon: /*#__PURE__*/React.createElement(HeartOutlined, {
        style: {
          marginRight: "10px"
        }
      }),
      children: [{
        id: 3 - 2 - 1,
        name: '3-2-1',
        icon: /*#__PURE__*/React.createElement(RocketOutlined, {
          style: {
            marginRight: "10px"
          }
        })
      }]
    }, {
      id: 3 - 3,
      name: '3-3',
      icon: /*#__PURE__*/React.createElement(StarOutlined, {
        style: {
          marginRight: "10px"
        }
      }),
      children: [{
        id: 3 - 3 - 1,
        name: '3-3-1',
        icon: /*#__PURE__*/React.createElement(SolutionOutlined, {
          style: {
            marginRight: "10px"
          }
        })
      }]
    }]
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TreeStyle, {
    data: data
  }));
}