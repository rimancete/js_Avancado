import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin: 20px 0;
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
