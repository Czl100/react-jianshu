import {fromJS} from 'immutable';
import actionType from './actionType';

// 数据 | 状态
const defaultStore = fromJS({
  title: '',
  content: ''
});

export default ( state=defaultStore, action) => {   
    switch(action.type){
      case actionType.CHANGE_DETAIL:
        return state.merge({
          title: action.title,
          content: action.content
        });
      default:
        return state;
    }
}
