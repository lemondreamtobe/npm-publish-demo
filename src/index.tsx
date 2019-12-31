import React from 'react';
import './index.less';

// 导出该组件供给其它模块使用
export default class HelloWebpack extends React.Component {
  render() {
    return <h1 className="hello-component">Hello,Webpack</h1>
  }
}