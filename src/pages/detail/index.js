import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actionCreator} from './store';
import {DetailWrapper, Header, Content} from './style';

class Detail extends PureComponent{
  render(){
    const {title, content} = this.props;
    return (
      <DetailWrapper>
        <Header>{ title }</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}/>
      </DetailWrapper>
    )
  }

  componentDidMount(){
    const params = this.props.match.params;
    this.props.getDitail(params.id);
    // 方案2. const search = this.props.location;    
  }
}

const mapState = (state)=>({
  title: state.get('detail').get('title'),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch)=>({
  getDitail(id){
    dispatch( actionCreator.getDetil(id) );
  }
});

// withRouter(Detail) 使Detail 组件能获取路由中的信息
export default connect(mapState, mapDispatch)( withRouter(Detail) );