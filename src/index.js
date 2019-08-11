import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * import './index.css'; 在全局范围内 index.css 中的样式都会生效;
 * 使用 styled-components 处理样式;
*/
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
