import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {actionCreator as actionCreatorLogin} from '../../pages/login/store';

import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,
  Button, SearchWrapper, SearchInfo, SearchInfoTitle,
  SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style.js';
import './animation.css';

class Header extends Component {
  getListArea() {
    const { focused, mouseIn, searchList, searchPage, totalSearchPage,
      handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const curSearchPage = [];
    const listJs = searchList.toJS();
    if (listJs.length) {
      for (let i = (searchPage - 1) * 10; i < searchPage * 10 && i < listJs.length; i++) {
        // 当前 searchList 是 immutable 类型, 不支持 [i] 形式访问
        curSearchPage.push(<SearchInfoItem key={listJs[i]}>{listJs[i]}</SearchInfoItem>);
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch
              onClick={() => handleChangePage(totalSearchPage, searchPage, this.spinIcon)}>
              <span ref={icon => this.spinIcon = icon} className="iconfont spin">&#xe857;</span>
              换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {curSearchPage}
          </SearchInfoList>
        </SearchInfo>
      );
    }
    else return null;
  }

  render() {
    let { focused, searchList, login, handleInputFocus, handleInputBlur, logout} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'><Logo /></Link>
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          { login ? 
            <NavItem onClick={logout} className='right'>退出</NavItem>
            : <NavItem className='right'><Link to='/login'>登录</Link></NavItem>
            // <NavItem className='right'>登录</NavItem>
          }
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames='slide'
            >
              <NavSearch
                onFocus={() => handleInputFocus(searchList)}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}>
              </NavSearch>
            </CSSTransition>
            <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe686;</span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>

        <Addition>
          <Button className="writting"><Link to="/write" className="iconfont">&#xe77b;写文章</Link></Button>
          <Button className="reg">注册</Button>
        </Addition>

      </HeaderWrapper>
    )
  }
}

// 将 store 中的数据映射到当前 props 供组件使用
const mapStateToProps = (state) => {
  return {
    // 将 state 仓库中的 focused 映射到 props.focused
    // 1. focused: state.header.focused
    // 2. focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    searchList: state.get('header').get('searchList'),
    totalSearchPage: state.getIn(['header', 'totalSearchPage']),
    searchPage: state.getIn(['header', 'searchPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}
// 当前组件如何修改 store 中的数据(调用dispath方法)
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(searchList) {
      // 获取 ajax 数据
      searchList.size < 1 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(totalPage, curPage, spinIcon) {
      let angle = spinIcon.style.transform.replace(/[^0-9]/gi, '');
      let originAngle = angle ? parseInt(angle) : 0;
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;

      if (curPage < totalPage) {
        dispatch(actionCreators.changePage(curPage + 1));
      }
      else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout(){
      dispatch( actionCreatorLogin.logout() );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);