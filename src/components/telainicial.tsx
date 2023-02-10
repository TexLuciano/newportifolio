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
import texfoto from '../img/texfoto.png';
import { useTypewriter } from 'react-simple-typewriter';

const Container = styled.section<{ tam: number }>`
  margin: 0 auto;
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
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

const ContainerIntro = styled.div<{ tam: number, text: string, screen:number }>`
  top: ${({screen})=>   screen / 7 +'px' } ;
  display: grid;
  transform: scale(${({ tam }) => 1 + tam / 2});
  position: absolute;
  transition: 0.5s;
  place-items: center;
  place-content: center;
  grid-template-columns:350px minmax(400px, 700px);
  z-index: 5;
  display: ${({ tam }) => (tam > 30 ? 'none' : 'grid')};
  img {
    display: block;
    max-width:350px;
    transition: 1s;
    transform: scale(${({ text }) => (text.length >= 18 ? 1 : 0)});
  }
  div {
    display: grid;
    place-items: center;
  }
  @media (max-width: 1600px) {
    grid-template-columns:200px minmax(200px, 600px);
      img{
        max-width: 220px;
      }
      span{
        font-size: 2.7rem;
      }
  }
  @media (max-width: 1400px) {
    grid-template-columns:200px minmax(200px, 480px);
      img{
        max-width: 200px;
      }
      span{
        font-size: 2.3rem;
      }
  }
`;

const Palavra = styled.span<{ text: string; length: number }>`
  border-right: ${({ text, length }) =>
    text.length >= length ? 'none' : '2px solid #fff'};
  color: #fff;
  font-family: 'Silkscreen', cursive;
  font-size: 3rem;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  align-self: center;
  justify-self: center;
  animation: blinkCursor 0.5s infinite;
  transition: 1s;
`;

const Foto = styled.div<{ tam: number }>`
  overflow: hidden;
`;

const Lamp = styled.div<{ ligar: number; tam: number; screen: number }>`
  left: ${({ screen }) => {
    const leftValue =
      screen >= 1500
        ? screen / 30
        : screen >= 1400
        ? screen / 30
        : screen >= 1200
        ? screen / 28
        : screen >= 1100
        ? screen / 30
        : screen / 28;
    return `${leftValue}px`;
  }};
  top: ${({ screen }) => {
    const topValue =
      screen >= 1600
        ? screen / 7 + 30
        : screen >= 1500
        ? screen / 7 + 20
        : screen >= 1400
        ? screen / 7 + 20
        : screen / 7 + 20;
    return `${topValue}px`;
  }};
  opacity: ${({ tam, screen }) => (tam > 30 || screen < 1050  ? '0' : '1')};
  ${({ screen }) => {
    if (screen > 1300) {
      return css`
        width: 60px;
        height: 40px;
      `;
    } else if (screen > 1200) {
      return css`
        width: 40px;
        height: 30px;
      `;
    } else {
      return css`
        width: 40px;
        height: 25px;
      `;
    }
  }}

  transition: 0.5s;
  border-right: 8px solid ${({ ligar }) => (ligar ? '#f4efd1' : 'black')};
  border-bottom: 4px solid;
  border-top: 4px solid;
  overflow: hidden;
  display: ${({ tam }) => (tam > 30 ? 'none' : 'block')};
  z-index: 2;
  ${({ ligar }) =>
    ligar &&
    css`
      border-bottom: 4px solid #f4efd1;
      border-top: 4px solid #f4efd1;
      box-shadow: 0 0 5px #f4efd1, 0 0 30px #f4efd1, 0 0 40px #f4efd1,
        0 0 80px #f4efd1;
    `}
`;

const Poiter = styled.img<{ tam: number; screen: number }>`
  overflow: hidden;
  left: ${({ screen }) => {
    const leftValue =
      screen >= 1500
        ? screen / 30
        : screen >= 1400
        ? screen / 48
        : screen >= 1200
        ? screen / 50
        : screen >= 1100
        ? screen / 38
        : screen / 40;
    return `${leftValue}px`;
  }};
  max-width: ${({ screen }) => (screen >= 1200 ? '140px' : '100px')};
  top: ${({ screen }) => {
    const topValue =
      screen >= 1600
        ? screen / 3 + 90
        : screen >= 1500
        ? screen / 3 + 70
        : screen >= 1400
        ? screen / 3 + 50
        : screen / 3 + 50;
    return `${topValue}px`;
  }};
  position: absolute;
  transition: 0.5s;
  display: ${({ tam, screen }) => (tam > 30 || screen < 1050 || screen >= 2000 ? 'none' : 'block')};
  z-index: 2;
  animation: girar1 infinite 10s;
`;
const Poiter2 = styled.img<{ tam: number; screen: number }>`
  overflow: hidden;
  right: ${({ screen }) => {
    const leftValue =
      screen >= 1500
        ? screen / 38
        : screen >= 1400
        ? screen / 48
        : screen >= 1200
        ? screen / 50
        : screen >= 1100
        ? screen / 55
        : screen / 60;
    return `${leftValue}px`;
  }};
  max-width: ${({ screen }) => (screen >= 1300 ? '130px' : '100px')};

  top: ${({ screen }) => {
    const topValue =
      screen >= 1600
        ? screen / 3 + 35
        : screen >= 1500
        ? screen / 3 + 20
        : screen >= 1400
        ? screen / 3 + 10
        : screen / 3 + 20;
    return `${topValue}px`;
  }};
  transition: 0.5s;
  display: ${({ tam, screen }) => (tam > 30 || screen < 1050 || screen >= 2000 ? 'none' : 'block')};
  z-index: 2;
  animation: girar1 infinite 10s;
  position: absolute;
`;
const Poiter3 = styled.img<{ tam: number; screen: number }>`
  overflow: hidden;
  left: ${({ screen }) => screen / 3 + 'px'};
  max-width: ${({ screen }) => (screen >= 1300 ? '25px' : '15px')};
  top: ${({ screen }) => {
    const topValue =
      screen >= 1600
        ? screen / 3 + 170
        : screen >= 1500
        ? screen / 3 + 135
        : screen >= 1400
        ? screen / 3 + 130
        : screen / 3 + 120 
    return `${topValue}px`;
  }};
  transition: 0.5s;
  display: ${({ tam, screen }) => (tam > 30 || screen < 1050 || screen >= 2000 ? 'none' : 'block')};
  z-index: 2;
  animation: tremedor infinite 3s;
  position: absolute;
`;

const Fot = styled.img<{ tam: number }>`
  overflow: hidden;
  display: ${({ tam }) => (tam >= 2 || tam >= 5 ? 'none' : 'block')};
  opacity: ${({ tam }) => (tam >= 4 || tam >= 5 ? '0' : '1')};
  transform: scale(${({ tam }) => 1 + tam});
  transition: 0.8s;
  max-width: 100%;
  position: absolute;

  z-index: 1;

  @keyframes test2 {
    0% {
      transform: translateY(10px);
      transition: 2s;
    }
    30% {
      transform: translateX(50px);
      transition: 2s;
    }
    60% {
      transform: translateY(50px);
      transition: 2s;
    }
    80% {
      transform: translateX(-50px);
      transition: 2s;
    }
    100% {
      transform: translateY(10px);
      transition: 2s;
    }
  }
`;


export function TelaInicial({ valorScroll }: { valorScroll: number }) {
  const [ligarLuz, setLigarLuz] = useState(0);
  const [paralax, setParalax] = useState(0);
  const [screen, setScreen] = useState(window.innerWidth);
  const [background, setBaground] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [text] = useTypewriter({
    words: ['Sistema Iniciado', 'Luciano Martinello'],
    loop: 1,
  });

  const [text2] = useTypewriter({
    words: ['', '', 'Desenvolvedor'],
    loop: 1,
  });

  const [text3] = useTypewriter({
    words: ['', '', '', 'Front End &'],
    loop: 1,
  });
  const [text4] = useTypewriter({
    words: ['', '', '', '', 'UX/UI Designer'],
    loop: 1,
  });

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
  
  useEffect(()=>{
    if(screen > 1050){
      setBaground(principal)
    }else if(screen < 500){
      setBaground(mobile)
    }else if(screen > 2000){
      setBaground(telafixa)
    }
    else{
      setBaground(telafixa)
    }


  },[screen])

console.log(background)

  window.addEventListener('mousemove', parallax);
  return (
    <>
      <Foto tam={valorScroll}>
        <Fot
          onMouseMove={ligar}
          className="computer"
          src={background}
          tam={valorScroll / 50}
          alt=""
        />
       
      </Foto>
      <Container tam={valorScroll} className="teste1">
        <ContainerIntro tam={valorScroll} screen={screen} text={text}>
          <img src={texfoto} alt="foto perfil" />
          <div>
            <Palavra text={text} length={18} className="title-inicial">
              {text}{' '}
            </Palavra>
            <Palavra text={text2} length={13} className="title-inicial">
              {text2}
            </Palavra>
            <Palavra text={text3} length={11} className="title-inicial">
              {text3}
            </Palavra>
            <Palavra text={text4} length={14} className="title-inicial">
              {text4}
            </Palavra>
          </div>
        </ContainerIntro>
        <Lamp
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
        />

        <Poiter2
          className="teste"
          tam={valorScroll}
          screen={screen}
          src={ponteiro2}
        />
        <Poiter3 tam={valorScroll} screen={screen} src={ponteiro3} />
      </Container>
    </>
  );
}
