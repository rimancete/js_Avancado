import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  input {
    font-size: 20px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 3px 10px;
    &:focus {
      border-color: ${colors.primaryDarkColor};
    }
  }
  input::placeholder {
    font-size: 16px;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 20px;
  position: relative;
  margin-bottom: 20px;
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 15px;
    left: 52%;
    color: #fff;
    background: ${colors.primaryDarkColor};
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
