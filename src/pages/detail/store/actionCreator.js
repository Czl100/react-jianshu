import axios from 'axios';
import actionType from './actionType';

// redux-thunk 使我们可返回一个函数而不是对象;

export const getDetil = (id)=>{
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`)
    .then( res=>{
      const result = res.data.data;
      const action = {
        type: actionType.CHANGE_DETAIL,
        title: result.title,
        content: result.content
      }
      dispatch(action);
    })
  }
}