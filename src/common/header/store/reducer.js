import * as actionTypes from './constants';
import {fromJS} from 'immutable';

const defaultStore = fromJS({
    focused: false,
    mouseIn: false,
    searchList: [],
    searchPage: 1,
    totalSearchPage: 1    
});

/* 导出一个纯函数, 给定固定的输入就一定会有固定的输出,
** 并且没有副作用, 不能修改参数,
*/
export default (state=defaultStore, action) => {
    /*
    if(action.type === actionTypes.SEARCH_FOCUS){
        // return { focused: true }        
        // 使用 immutable 管理 state, 当前 state 是 immutable 对象
        return state.set('focused', true);
    }
    if(action.type === actionTypes.SEARCH_BLUR){
        // return { focused: false};
        return state.set('focused', false);
    } 
    */
    switch(action.type){
      case actionTypes.SEARCH_FOCUS: 
        return state.set('focused', true);
      case actionTypes.SEARCH_BLUR: 
        return state.set('focused', false);
      case actionTypes.MOUSE_ENTER: 
        return state.set('mouseIn', true);
      case actionTypes.MOUSE_LEAVE: 
        return state.set('mouseIn', false);
      case actionTypes.CHANGE_PAGE: 
        return state.set('searchPage', action.page);
      case actionTypes.CHANGE_LIST:
        // return state.set('searchList', action.data).set('totalSearchPage', action.totalSearchPage);
        // 等价于
        return state.merge({
          searchList: action.data,
          totalSearchPage: action.totalSearchPage
        });
      default:
        return state;
    }
}