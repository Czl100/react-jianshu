import {fromJS} from 'immutable';
import * as actionType from './actionType';

// 数据 | 状态
const defaultStore = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

export default (state=defaultStore, action) => {   
    switch(action.type){
      case actionType.CHANGE_HOME_DATA: 
        return state.merge({
          topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList)
          });
      case actionType.ADD_ARTICLE_LIST: 
        return state.merge({
          articlePage: action.nextArticlePage,
          articleList: state.get('articleList').concat( fromJS(action.articleList) )
        });
      case actionType.TOGGLE_SCROLL_TOP: 
        return state.set('showScroll', action.showScroll);
      default:
        return state;
    }
}
