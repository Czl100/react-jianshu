import React from 'react';
import Loadable from 'react-loadable';

/**
 * 将 Detail 组件转换为异步组件,
 * loader: 需要异步加载的组件,
 * loading: 加载过程中临时显示的组件
 */
const LoadableComponent = Loadable({  
  loader: () => import('./index.js'),
  loading(){
    return <div>正在加载...</div>
  }
});

export default () => <LoadableComponent/>