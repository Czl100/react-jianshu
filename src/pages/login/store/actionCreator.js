import axios from 'axios';
import actionType from './actionType';

// redux-thunk 使我们可返回一个函数而不是对象;

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`)
    .then(res=>{
      const vaildLogin = res.data.data;
      if(vaildLogin){
        const action = {
          type: actionType.CHANGE_LOGIN,
          isLogin: true
        };        
        dispatch(action);
      }else{
        alert('账号或者密码错误!');
      }
    })
  }
}

// login
export const logout = ()=>{
  const action = {
    type: actionType.LOGOUT,
    value: false
  };
  return action;
}