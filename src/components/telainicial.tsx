import React, { useEffect, useRef, useState, MouseEvent } from 'react';
import '../app.css';
import '../style/styleinicial.css';
import styled, { css } from 'styled-components';
import principal from '../img/principal.png';
import mobile from '../img/mobile.png';
import telafixa from '../img/telafixa.png';
import ponteiro1 from '../img/ponteiro1.svg';
import ponteiro2 from '../img/ponteiro2.svg';
import ponteiro3 from '../img/ponteiro3.svg';
import Intro from './Intro';
import { calculateTop, calculateDirection, calculateTopLamp } from './Utils';

const Container = styled.section<{ tam: number }>`
  margin: 0 auto;
  position: relative;
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

const Lamp = styled.div<{
  ligar: number;
  tam: number;
  screen: number;
  left: number;
  topValue: number;
}>`
  left: ${({ left }) => `${left}px`};
  top: ${({ topValue }) => `${topValue}px`};
  opacity: ${({ tam, screen }) =>
    tam > 30 || screen < 1050 || screen >= 2000 ? '0' : '1'};
  width: 70px;
  height: 45px;
  transition: 0.5s;
  border-right: 8px solid ${({ ligar }) => (ligar ? '#f4efd1' : 'black')};
  border-bottom: 4px solid;
  border-top: 4px solid;
  overflow: hidden;
  display: ${({ tam }) => (tam > 30 ? 'none' : 'block')};
  z-index: 2;
  @media (max-width: 1568px) {
    width: 60px;
    height: 40px;
  }
  @media (max-width: 1400px) {
    width: 55px;
    height: 35px;
  }
  @media (max-width: 1262px) {
    width: 45px;
    height: 30px;
  }
  ${({ ligar }) =>
    ligar &&
    css`
      border-bottom: 4px solid #f4efd1;
      border-top: 4px solid #f4efd1;
      box-shadow: 0 0 5px #f4efd1, 0 0 30px #f4efd1, 0 0 40px #f4efd1,
        0 0 80px #f4efd1;
    `}
`;

const Poiter = styled.img<{
  tam: number;
  screen: number;
  topValue: number;
  left: number;
}>`
  overflow: hidden;
  left: ${({ left }) => `${left}px`};
  max-width: ${({ screen }) => (screen >= 1200 ? '140px' : '100px')};
  top: ${({ topValue }) => `${topValue}px`};
  position: absolute;
  transition: 0.5s;
  display: ${({ tam, screen }) =>
    tam > 30 || screen < 1050 || screen >= 2000 ? 'none' : 'block'};
  z-index: 2;
  animation: girar1 infinite 10s;
`;
const Poiter2 = styled.img<{
  tam: number;
  screen: number;
  topValue: number;
  rigth: number;
}>`
  overflow: hidden;
  right: ${({ rigth }) => `${rigth}px`};
  max-width: ${({ screen }) => (screen >= 1300 ? '130px' : '100px')};
  top: ${({ topValue }) => `${topValue}px`};
  transition: 0.5s;
  display: ${({ tam, screen }) =>
    tam > 30 || screen < 1050 || screen >= 2000 ? 'none' : 'block'};
  z-index: 2;
  animation: girar1 infinite 10s;
  position: absolute;
`;
const Poiter3 = styled.img<{ tam: number; screen: number; topValue: number }>`
  overflow: hidden;
  left: ${({ screen }) => screen / 3 + 'px'};
  max-width: ${({ screen }) => (screen >= 1300 ? '25px' : '15px')};
  top: ${({ topValue }) => `${topValue}px`};
  transition: 0.5s;
  display: ${({ tam, screen }) =>
    tam > 30 || screen < 1050 || screen >= 2000 ? 'none' : 'block'};
  z-index: 2;
  animation: tremedor infinite 3s;
  position: absolute;
`;

const Principal = styled.img<{ tam: number }>`
  overflow: hidden;
  display: ${({ tam }) => (tam >= 3 || tam >= 5 ? 'none' : 'block')};
  opacity: ${({ tam }) => (tam >= 4 || tam >= 5 ? '0' : '1')};
  transform: scale(${({ tam }) => 1 + tam});
  transition: 0.8s;
  max-width: 100%;
  z-index: 1;
  object-fit: cover;
`;

export function TelaInicial({ valorScroll }: { valorScroll: number }) {
  const [ligarLuz, setLigarLuz] = useState(0);
  const [paralax, setParalax] = useState(0);
  const [background, setBaground] = useState(telafixa);
  const [screen, setScreen] = useState(window.innerWidth);
  console.log(calculateTop);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function parallax(e: MouseEventInit) {
    if (e instanceof PointerEvent) {
      setParalax(e.clientX + e.clientY - 100);
    }
  }

  function ligar() {
    setLigarLuz(1);

    if (ligarLuz === 1) {
      setTimeout(() => {
        setLigarLuz(0);
      }, 4000);
    }
  }

  useEffect(() => {
    if (screen >= 2000) {
      setBaground(telafixa);
    } else if (screen >= 1050) {
      setBaground(principal);
    } else if (screen <= 520) {
      setBaground(mobile);
    } else {
      setBaground(telafixa);
    }
  }, [screen]);

  console.log(screen);

  window.addEventListener('mousemove', parallax);
  return (
    <>
      <Container tam={valorScroll} className="teste1">
        <Principal
          onMouseMove={ligar}
          className="computer"
          src={background}
          tam={valorScroll / 50}
          alt=""
        />
        <Intro screen={screen} tam={valorScroll} />
        <Lamp
          left={calculateDirection(screen, 30, 30, 30, 30, 30)}
          topValue={calculateTopLamp(screen, 32, 25, 22, 20, 16)}
          tam={valorScroll}
          ligar={ligarLuz}
          screen={screen}
          className="lampada teste"
        ></Lamp>

        <Poiter
          className="teste"
          tam={valorScroll}
          screen={screen}
          src={ponteiro1}
          left={calculateDirection(screen, 30, 48, 50, 38, 40)}
          topValue={calculateTop(screen, 90, 70, 50, 48)}
        />

        <Poiter2
          className="teste"
          tam={valorScroll}
          screen={screen}
          rigth={calculateDirection(screen, 38, 48, 50, 55, 60)}
          topValue={calculateTop(screen, 35, 20, 10, 12)}
          src={ponteiro2}
        />
        <Poiter3
          tam={valorScroll}
          screen={screen}
          topValue={calculateTop(screen, 170, 135, 130, 115)}
          src={ponteiro3}
        />
      </Container>
    </>
  );
}
