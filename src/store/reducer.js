/** 
 * 将 state 该为 immutable 对象
 * import {combineReducers} from 'redux';
 * redux-immutable 中的 combineReducers 函数生成一个 immutable 对象
 * */ 
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {homeReducer} from '../pages/home/store';
import {detailReducer} from '../pages/detail/store';
import {loginReducer} from '../pages/login/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;