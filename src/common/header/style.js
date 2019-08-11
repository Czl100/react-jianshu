import styled from 'styled-components';
import logoImg from '../../static/logo.png';
// 带有自定义样式的 div 元素
const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #fofofo;
    z-index: 1;
`;

const Logo = styled.span`
    display: inline-block;
    position: absolute;    
    height: 58px;
    top: 0;
    left: 0;
    width: 100px;
    background: url(${logoImg}) no-repeat;
    background-size: contain;
`;

const Nav = styled.div`
    width: 960px;
    height: 100%;    
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
/**
 * .slide-enter .slide-active 为动画样式
 * */ 
const SearchWrapper = styled.div`
    position: relative;
    float: left;

    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;        
        text-align: center;

        &.focused {
            background: skyblue;        
        }
    }
`;

const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`    
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    width: 160px;
    height: 38px;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }

    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
        background: red;        
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

const Button = styled.div`
    float: right;
    margin-top: 9px;    
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: solid 1px #ec6149;
    cursor: pointer;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;

const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;

const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;    
  }
`;

const SearchInfoList = styled.div`
    overflow: hidden;
`;

const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 5px;
    border: solid 1px #ddd;
    border-radius: 3px;
    line-height: 20px;
    color: #787878;
    font-size: 12px;    
`;

export {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
}