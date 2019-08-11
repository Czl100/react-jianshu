import {fromJS} from 'immutable';
import actionType from './actionType';

// 数据 | 状态
const defaultStore = fromJS({
  login: false
});

export default ( state=defaultStore, action) => {   
    switch(action.type){
      case actionType.CHANGE_LOGIN:
        return state.set('login', action.isLogin);
      case actionType.LOGOUT:
        return state.set('login', action.value);
      default:
        return state;
    }
}
