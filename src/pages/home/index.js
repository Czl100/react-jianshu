import React, {Component} from 'react';
import {connect} from 'react-redux';

import {actionCreator} from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import staticImgs from '../../static';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';

class Home extends Component{
  render(){
    const {showScroll} = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt='' src={staticImgs.oneImg}/>
          <Topic/>
          <List/>
        </HomeLeft>

        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>

        { showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
      </HomeWrapper>
    )
  }

  // 发送 axios 请求获取数据, 显示到页面上;
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop(){
    window.scrollTo(0, 0);
  }

  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state)=>({
  showScroll: state.get('home').get('showScroll')
});

const mapDispatch = (dispatch)=>({
  // 返回了一个对象, 该对象有一个 changeHomeData 属性, 定义了 changeHomeData 函数;
  changeHomeData(){
    const action = actionCreator.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(event){
    if(document.documentElement.scrollTop > 400){      
      dispatch(actionCreator.toggleTopShow(true));
    }else{
      dispatch(actionCreator.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);