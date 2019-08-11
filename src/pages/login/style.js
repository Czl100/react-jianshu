import styled from 'styled-components';

// z-index: 0 是为了使 HeaderWapper 显示出来
export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
  z-index: 0;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0, .1);
`;

export const Input = styled.input`
  display: block;
  margin: 10px auto;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
`;

export const Button = styled.div`
  margin: 10px auto;
  width: 220px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
`;