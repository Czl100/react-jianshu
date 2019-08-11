import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {actionCreator} from './store';
import {LoginWrapper, LoginBox, Input, Button} from './style';

class Login extends PureComponent{
  render(){
    const {login, handleLogin} = this.props;
    if(!login){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input ref={ (el) => this.account=el } placeholder="账号"/>
            <Input ref={ this.password } type='password' placeholder="密码"/>
            {/* <Button onClick={ ()=>handleLogin(this.account.value, this.password.value) }>登录</Button> */}
            <Button onClick={ ()=>handleLogin(this.account, this.password) }>登录</Button>

          </LoginBox>
        </LoginWrapper>
      )
    }
    else{
      return <Redirect to='/' />
    }
  }
}

const mapState = (state)=>({
  login: state.getIn(['login','login'])
});

const mapDispatch = (dispatch)=>({
  // account, password 是真实的 DOM
  handleLogin(account, password){
    console.dir(account);
    dispatch( actionCreator.login(account, password) );
  }
});

export default connect(mapState, mapDispatch)(Login);