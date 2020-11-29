import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
  line-height: 2em;
  letter-spacing: 0.005em;
}
html, body, #root {
height: 100%;
}
button {
  cursor: pointer;
  background: ${colors.primaryColor};
  border:none;
  color: #eee;
  padding: 8px 20px;
  border-radius: 5px;
  font-weight: 700;
  transition: all, 0.3s;
}
button:hover{
  background: ${colors.primaryDarkColor};
  color: #fff
}
a{
  text-decoration: none;
  color: ${colors.primaryDarkColor};
}
ul{
  list-style: none;
}
.title404{
  text-align: center;
  font-size: 2em;
}

.toast-container .Toastify__toast--success{
  background: ${colors.successColor};
}
.toast-container .Toastify__toast--error{
  background: ${colors.errorColor};
}

`;

export const Container = styled.section`
  max-width: 90%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;
