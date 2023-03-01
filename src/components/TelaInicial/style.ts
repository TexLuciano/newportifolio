import test1 from '../../img/testlamp.png';
import test2 from '../../img/testpt.png';
import test3 from '../../img/testpt2.png';
import relogio from '../../img/relogio1.png';
import styled, { css } from 'styled-components';

export const Container = styled.section<{ tam: number }>`
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  place-items: center;
  place-content: center;
  overflow: hidden;
  background: rgb(30, 57, 60);
  background: linear-gradient(
    270deg,
    rgba(30, 57, 60, 1) 0%,
    rgba(23, 2, 2, 1) 0%,
    rgba(27, 39, 54, 1) 20%,
    rgba(30, 57, 60, 1) 50%,
    rgba(27, 39, 54, 1) 80%,
    rgba(23, 2, 2, 1) 100%
  );
`;

export const ContainerLamp = styled.div<{
  tam: number;
  ligar: number;
}>`
  position: absolute;
  background: url(${test1}) no-repeat center;
  content: '';
  left: 50px;
  top: 30%;
  //top: 60%;
  width: 300px;
  height: 500px;
  background-size: 220px;
  z-index: 200;
  transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
  transition: 0.3s;
  display: block;
  display: grid;
  place-content: center;
  div {
    transition: 0.3s;
    max-width: 100%;
    width: 80px;
    height: 130px;
    transition: 0.5s;
    margin-bottom: 8px;
    border-top: 15px solid ${({ ligar }) => (ligar ? '#f4efd1' : 'black')};
    border-left: 10px solid;
    border-right: 10px solid;
    overflow: hidden;
    display: ${({ tam }) => (tam > 30 ? 'none' : 'block')};
    z-index: 2;
    ${({ ligar }) =>
      ligar &&
      css`
        border-top: 4px solid #f4efd1;
        border-right: 4px solid #f4efd1;
        border-left: 4px solid #f4efd1;
        box-shadow: 0 0 5px #f4efd1, 0 0 30px #f4efd1, 0 0 40px #f4efd1,
          0 0 80px #f4efd1;
      `}
  }

  @media (max-width: 2980px) {
    left: 10px;
  }
  @media (max-width: 2250px) {
    width: 210px;
    height: 350px;
    left: 25px;
    background-size: 180px;
    div {
      width: 80px;
      height: 100px;
    }
  }
  @media (max-width: 1950px) {
    width: 140px;
    height: 220px;
    background-size: 130px;
    left: 30px;
    div {
      width: 50px;
      height: 80px;
      border-top: 8px solid ${({ ligar }) => (ligar ? '#f4efd1' : 'black')};
      border-left: 5px solid;
      border-right: 5px solid;
      ${({ ligar }) =>
        ligar &&
        css`
          border-top: 4px solid #f4efd1;
          border-right: 4px solid #f4efd1;
          border-left: 4px solid #f4efd1;
          box-shadow: 0 0 5px #f4efd1, 0 0 30px #f4efd1, 0 0 40px #f4efd1,
            0 0 80px #f4efd1;
        `}
    }
  }
  @media (max-width: 1290px) {
    width: 100px;
    height: 180px;
    left: 25px;
    background-size: 100px;
    div {
      width: 40px;
      height: 60px;
    }
  }
  @media (max-width: 1030px) {
    width: 70px;
    left: 10px;
    background-size: 70px;
    div {
      width: 25px;
      height: 40px;
    }
  }
  @media (max-width: 700px) {
    left: 0px;
    background-size: 60px;
    div {
      width: 25px;
      height: 40px;
      border-top: 4px solid ${({ ligar }) => (ligar ? '#f4efd1' : 'black')};
      border-left: 2px solid;
      border-right: 2px solid;
      ${({ ligar }) =>
        ligar &&
        css`
          border-top: 4px solid #f4efd1;
          border-right: 4px solid #f4efd1;
          border-left: 4px solid #f4efd1;
          box-shadow: 0 0 5px #f4efd1, 0 0 30px #f4efd1, 0 0 40px #f4efd1,
            0 0 80px #f4efd1;
        `}
    }
    @media (max-width: 550px) {
      width: 70px;
      left: 300px;
      top: 60%;
      background-size: 70px;
      div {
        width: 25px;
        height: 40px;
      }
    }
  }
`;

export const Principal = styled.img<{ tam: number }>`
  overflow: hidden;
  display: ${({ tam }) => (tam >= 3 || tam >= 5 ? 'none' : 'block')};
  opacity: ${({ tam }) => (tam >= 4 || tam >= 5 ? '0' : '1')};
  transform: scale(${({ tam }) => 1 + tam});
  transition: 0.3s;
  width: 100%;
  object-fit: cover;
`;

export const Div = styled.div`
  position: relative;
  width: 5000px;
  overflow: hidden;
  @media (max-width: 280px) {
  }
`;

export const Clock = styled.div<{
  tam: number;
}>`
  background: url(${relogio}) no-repeat;
  position: absolute;
  left: 20px;
  top: 20px;
  width: 400px;
  height: 400px;
  background-size: 100%;
  z-index: 200;
  transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
  transition: 0.3s;
  display: grid;
  place-content: center;
  img {
    transition: 0.3s;
    transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
    display: block;
    max-width: 350px;
    animation: girar1 10s infinite;
  }

 
`;


export const Clock2 = styled.div<{
  tam: number;
}>`
  background: url(${test3}) no-repeat;
  position: absolute;
  right: -80px;
  top: 52%;
  //top: 60%;
  width: 650px;
  height: 650px;
  background-size: 100%;
  z-index: 200;
  transform: translateX(${({ tam }) => 0 + tam * 2 + 'px'});
  transition: 0.3s;
  display: grid;
  place-content: center;
  img {
    transition: 0.3s;
    display: block;
    max-width: 210px;
    animation: girar2 5s infinite;
    margin-bottom: 20px;
  }

`;

export const Clock3 = styled.div<{
  tam: number;
}>`
  background: url(${test2}) no-repeat;
  position: absolute;
  left: 600px;
  top: 65%;
  //top: 60%;
  width: 600px;
  height: 400px;
  background-size: 100%;
  z-index: 200;
  transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
  transition: 0.3s;

  img {
    transition: 0.3s;
    transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
    display: block;
    max-width: 100px;
    animation: leftRight 3s infinite;
  }


`;


