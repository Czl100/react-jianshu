import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

// 导入全局样式
import GlobalStyle from './style.js';
import { IconfontStyle} from './static/iconfont/iconfontstyle.js';

// import store from './store' 也可以, 默认文件是 index.js
import store from './store/index.js';
import Header from './common/header';

import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle/>
        <IconfontStyle/>
        
        <BrowserRouter>
          <div id="route">
            <Header/>
            {/* exact 表示完全匹配 */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>                
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
