import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
  background: ${primaryDarkColor};
  color: ${primaryDarkColor};
  line-height: 2em;
  letter-spacing: 0.005em;
}
html, body, #root {
height: 100%;
}
button {
  cursor: pointer;
  background: ${primaryColor};
  border:none;
  color: #eee;
  padding: 8px 20px;
  border-radius: 5px;
  font-weight: 700;
  transition: all, 0.3s;
}
button:hover{
  background: ${primaryDarkColor};
  color: #fff
}
a{
  text-decoration: none;
  color: ${primaryDarkColor};
}
ul{
  list-style: none;
}
.title404{
  text-align: center;
  font-size: 2em;
}
`;

export const Container = styled.section`
  max-width: 70%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;
