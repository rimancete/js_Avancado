import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DialogButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
  font-weight: 550;
  p {
    margin-right: 5px;
    font-size: 13.5px;
  }
`;
