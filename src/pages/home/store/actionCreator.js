import axios from 'axios';
import * as actionType from './actionType';

// redux-thunk 使我们可返回一个函数而不是对象;
export const getHomeInfo = () => {
  return (dispatch) => 
    axios.get('/api/home.json')
    .then(res=>{
      const result = res.data.data;
      dispatch(parseRes(result));
    });  
}

// 加载更多列表数据
export const getMoreList = (articlePage)=>{
  return (dispatch)=>{
    axios.get(`/api/homeList.json?page=${articlePage}`)
    .then(res=>{
      const result = res.data.data;
      console.dir(result);
      const action = {
        type: actionType.ADD_ARTICLE_LIST,
        articleList: result,
        nextArticlePage: articlePage+1
      };
      dispatch( action );
    })
  }
}

export const toggleTopShow = (isShow)=>{
  return {
    type: actionType.TOGGLE_SCROLL_TOP,
    showScroll: isShow
  };
}

// 辅助函数
function parseRes(res){
  const action = {
    type: actionType.CHANGE_HOME_DATA,
    topicList: res.topicList,
    articleList: res.articleList,
    recommendList: res.recommendList
  }
  return action;
}