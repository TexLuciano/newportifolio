import React, { useEffect, useRef, useState, MouseEvent, Ref } from 'react';
import '../app.css';
import '../style/styleinicial.css';
import styled, { css } from 'styled-components';
import principal from '../img/testbg.png';
import test1 from '../img/testlamp.png';
import test2 from '../img/testpt.png';
import test3 from '../img/testpt2.png';

import mobile from '../img/mobile.png';
import telafixa from '../img/telafixa.png';
import ponteiro1 from '../img/ponteiro1.svg';
import relogio from '../img/relogio1.png';
import ponteiro2 from '../img/ponteiro2.svg';
import ponteiro3 from '../img/ponteiro3.svg';
import Intro from './Intro';
import {
  calculateTop,
  calculateDirection,
  calculateTopLamp,
  display,
} from './Utils';

const Container = styled.section<{ tam: number }>`
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

const Lamp = styled.div<{
  ligar: number;
  tam: number;
  screen: number;
  left: number;
  topValue: number;
}>`
  opacity: ${({ tam, screen }) =>
    tam > 30 || screen < 1050 || screen >= 2000 ? '0' : '1'};
  width: 40px;
  height: 70px;
  transition: 0.5s;
  margin-bottom: 8px;
  border-top: 8px solid ${({ ligar }) => (ligar ? '#f4efd1' : 'black')};
  border-left: 4px solid;
  border-right: 4px solid;
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
`;

const Poiter = styled.img<{
  tam: number;
  screen: number;
  topValue: number;
  left: number;
  display: string;
}>`
  overflow: hidden;
  left: ${({ left }) => `${left}px`};
  max-width: ${({ screen }) => (screen >= 1200 ? '140px' : '100px')};
  top: ${({ topValue }) => `${topValue}px`};
  position: absolute;
  transition: 0.5s;
  display: ${({ display }) => `${display}`};
  z-index: 2;
  animation: girar1 infinite 10s;
`;
const Poiter2 = styled.img<{
  tam: number;
  screen: number;
  topValue: number;
  rigth: number;
  display: string;
}>`
  overflow: hidden;
  right: ${({ rigth }) => `${rigth}px`};
  max-width: ${({ screen }) => (screen >= 1300 ? '130px' : '100px')};
  top: ${({ topValue }) => `${topValue}px`};
  transition: 0.5s;
  display: ${({ display }) => `${display}`};
  z-index: 2;
  animation: girar1 infinite 10s;
  position: absolute;
`;
const Poiter3 = styled.img<{
  tam: number;
  screen: number;
  topValue: number;
  display: string;
}>`
  overflow: hidden;
  left: ${({ screen }) => screen / 3 + 'px'};
  max-width: ${({ screen }) => (screen >= 1300 ? '25px' : '15px')};
  top: ${({ topValue }) => `${topValue}px`};
  transition: 0.5s;
  display: ${({ display }) => `${display}`};
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
  width: 100%;
  z-index: 1;
  object-fit: cover;
`;

const Div = styled.div`
  position: relative;
  width: 5000px;
`;

const Clock = styled.div<{
  tam: number;
  urll: string;
  top:string;
  left:string;
  widthp:string;
  anime:string

}>`
  background: url(${({ urll }) => urll}) no-repeat;
  position: absolute;
  left: ${({left})=> left};
  top:  ${({top})=> top};
  //top: 60%;
  width: 200px;
  background-size: 100%;
  z-index: 200;
  transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
  transition: 0.3s;

  img {
    transition: 0.3s;
    transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
    display: block;
    max-width: ${({widthp})=> widthp};
    animation: ${({anime})=> anime} infinite ;
  }
`;
const Clock2 = styled.div<{
  tam: number;
  screen: number;
  topValue: number;
  left: number;
  display: string;
}>`
  position: absolute;
  background: url(${test1}) no-repeat center;
  content: '';

  left: 10px;
  top: 30%;
  //top: 60%;
  width: 200px;
  height: 200px;
  background-size: 100px;
  z-index: 200;
  transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
  transition: 0.3s;
  display: block;
  display: grid;
  place-content: center;
  div {
    //display: ${({ display }) => `${display}`};
    transition: 0.3s;
    transform: translateX(${({ tam }) => -(0 + tam * 2) + 'px'});
    max-width: 100%;
  }
`;
export function TelaInicial({ valorScroll }: { valorScroll: number }) {
  const [ligarLuz, setLigarLuz] = useState(0);
  const [background, setBaground] = useState(telafixa);
  const [screen, setScreen] = useState(window.innerWidth);
  console.log();

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  console.log();

  return (
    <>
      <Container tam={valorScroll} className="teste1">
        <Div>
          <Principal
            onMouseMove={ligar}
            className="computer"
            src={background}
            tam={valorScroll / 50}
            alt=""
          />

          <Poiter
            className="teste"
            display={display(valorScroll, screen)}
            tam={valorScroll}
            screen={screen}
            src={ponteiro1}
            left={calculateDirection(screen, 30, 48, 50, 38, 40)}
            topValue={calculateTop(screen, 90, 70, 50, 48)}
          />
          <Lamp
            left={calculateDirection(screen, 30, 30, 30, 30, 30)}
            topValue={calculateTopLamp(screen, 32, 25, 22, 20, 16)}
            tam={valorScroll}
            ligar={ligarLuz}
            screen={screen}
            className="lampada teste"
          ></Lamp>
          <Poiter2
            className="teste"
            tam={valorScroll}
            display={display(valorScroll, screen)}
            screen={screen}
            rigth={calculateDirection(screen, 38, 48, 50, 55, 60)}
            topValue={calculateTop(screen, 35, 20, 10, 17)}
            src={ponteiro2}
          />
          <Poiter3
            tam={valorScroll}
            display={display(valorScroll, screen)}
            screen={screen}
            topValue={calculateTop(screen, 170, 135, 130, 115)}
            src={ponteiro3}
          />

          <Clock2
            className="testee"
            display={display(valorScroll, screen)}
            tam={valorScroll}
            screen={screen}
            left={calculateDirection(screen, 30, 48, 50, 38, 40)}
            topValue={calculateTop(screen, 90, 70, 50, 48)}
          >
            <Lamp
              left={calculateDirection(screen, 30, 30, 30, 30, 30)}
              topValue={calculateTopLamp(screen, 32, 25, 22, 20, 16)}
              tam={valorScroll}
              ligar={ligarLuz}
              screen={screen}
              className="lampada teste"
            ></Lamp>
            <div></div>
          </Clock2>
          <Clock urll={relogio} top={'10px'} left={'10px'} widthp={'100%'} anime={'girar1 10s'}className="testee" tam={valorScroll}>
            <img src={ponteiro1} />
          </Clock>
          <Clock urll={test2}  top={'62%'} left={'380px'} widthp={'50px'} anime={'leftRight 3s'}className="testee" tam={valorScroll}>
            <img src={ponteiro3} />
          </Clock>
        </Div>
        <Intro screen={screen} tam={valorScroll} />
      </Container>
    </>
  );
}
