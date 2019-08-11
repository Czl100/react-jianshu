import {fromJS} from 'immutable';
import axios from 'axios';
import * as actionTypes from './constants';

const changeList = (data)=>({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalSearchPage: Math.ceil(data.length/10)
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = ()=>({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = ()=>({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page)=>({
  type: actionTypes.CHANGE_PAGE,
  page: page
})

export const getList = ()=>{
  // 使用了 redux-thunk, 可以返回一个函数, 执行异步请求
  return (dispatch)=>{
    // dispatch()
    axios.get('/api/headerList.json').then( res=>{
      const data = res.data;
      const action = changeList(data.data);
      dispatch(action);
    }).catch( ()=>{
      console.log('error!');
    })
  }
}