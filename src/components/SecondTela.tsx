import React from 'react';
import styled from 'styled-components';
import '../style/styleinicial.css';
import tex from '../img/texugogif.gif';

interface Props {
  valorScroll: number;
}

const Container = styled.div<{ tam: number }>`
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

  margin: 0 auto;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const Title = styled.h1<{ tam: number; offset: number }>`
  color: #fff;
  font-family: 'Silkscreen', cursive;
  font-size: 3rem;
  white-space: nowrap;
  overflow: hidden;
  transform: scale(${({ tam, offset }) => (tam < offset ? 0 : 1)});
  transition: 0.5s;
`;

const Img = styled.img<{ tam: number }>`
  position: absolute;
  top: ${({ tam }) => tam / 4 + 1200 + 'px'};
  right: 0px;
  transform: translateX(${({ tam }) => (tam > 700 ? -tam + 'px' : '0px')});
  z-index: 5;
  transition: 2.1s;
  overflow: hidden;
  animation: peixe 3s infinite;

  @keyframes peixe {
    0% {
      top: 1500px;
    }
    50% {
      top: 1470px;
    }
    100% {
      top: 1500px;
    }
  }
`;

const SecondTela: React.FC<Props> = ({ valorScroll }) => {
 
console.log(valorScroll)
  return (
    <>
      <Img tam={valorScroll} src={tex} alt="peixe" />
      <Container tam={valorScroll}>
        <Title tam={valorScroll} offset={200}>
          Teste zoom 1
        </Title>
      </Container>
      <Container tam={valorScroll}>
        <Title tam={valorScroll} offset={700}>
          Teste zoom 2
        </Title>
      </Container>
      <Container tam={valorScroll}>
        <Title tam={valorScroll} offset={1400}>
          Teste zoom 3
        </Title>
      </Container>
    </>
  );
};
export default SecondTela;
