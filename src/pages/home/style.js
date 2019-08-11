import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 960px;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }

`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;  
`;

// 
export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;  
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;    
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    border-radius: 10px;
    width: 125px;
    height: 100px;
  }  
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;  
  background: #a5a5a5;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

// Recommend
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;  
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const WriterWapper = styled.div`
  width: 278px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  border: solid 1px #dcdcdc;
  border-radius: 3px;  
`;

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  border: 1px solid skyblue;
  border-radius: 10px;
  background-color: skyblue;
`;