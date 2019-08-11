import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {actionCreator} from '../store';
import {ListItem, ListInfo, LoadMore} from '../style';

class List extends Component{
  render(){
    const {articleList, articlePage, getMoreList} = this.props;
    return (
      <div>
      {
        articleList.map((ele,ind)=>(
          <Link key={ind} to={`/detail/${ele.get('id')}`}>
          <ListItem key={ind}>
            <img className='pic' src={ele.get('imgUrl')} alt=''/>
            <ListInfo>
              <h3 className='title'>{ele.get('title')}</h3>
              <p className='desc'>{ele.get('desc')}</p>
            </ListInfo>
          </ListItem>
          </Link>
        ))
      }
      <LoadMore onClick={ ()=>getMoreList(articlePage) }>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = (state)=>({
  articleList: state.get('home').get('articleList'),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(articlePage){
    // 加载更多的列表数据
    dispatch( actionCreator.getMoreList(articlePage) )
  }
});

export default connect(mapState, mapDispatch)(List);