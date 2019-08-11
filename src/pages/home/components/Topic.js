import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from '../style';

class Topic extends Component{
  render(){
    return (
      <TopicWrapper>
        {this.props.topicList.map( el=>(
          <TopicItem key={el.get('id')}>
            <img src={el.get('imgUrl')} className='topic-pic' alt=''/>
            {el.get('title')}
          </TopicItem>
        ))}
      </TopicWrapper>
    )
  }
}

const mapState = (state)=>({
  // topicList: state.get('home').get('topicList') 等价于
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);