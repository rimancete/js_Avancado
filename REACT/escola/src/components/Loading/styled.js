import styled from 'styled-components';

// configurando o container e a div inferior para ocupar toda a tela e deixá-la escurecida
export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  /*colocando o texto carregando na frente da div */
  span {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
  }
`;
