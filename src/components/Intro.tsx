import React, { useEffect, useRef, useState } from 'react';
import '../app.css';
import '../style/styleinicial.css';
import styled from 'styled-components';
import { useTypewriter } from 'react-simple-typewriter';
import texfoto from '../img/texfoto.png';


const ContainerIntro = styled.div<{
  tam: number;
  text: string;
  screen: number;
}>`
  top: ${({ screen }) => screen / 7 + 'px'};
  gap: 10px;
  transform: scale(${({ tam }) => tam === 0 ? 1 : 0});
  position: absolute;
  transition: 0.4s;
  place-items: center;
  place-content: center;
  z-index: 5;
  display: ${({ tam }) => (tam > 50 ? 'none' : 'flex')};
  width: 100%;
  height: 100%;
  max-width: 1800px;
  max-height: 600px;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    transition: 1s;
    transform: scale(${({ text }) => (text.length >= 18 ? 1 : 0)});
  }

 

  @media (max-width: 2225px) {
    max-width: 1200px;
    max-height: 350px;
  }

  
  @media (max-width: 1570px) {
    max-width: 900px;
    max-height: 290px;
  }
   
  @media (max-width: 1350px) {
    max-width: 800px;
    max-height: 240px;
  }
  
  @media (max-width: 1050px) {
    max-width: 700px;
    max-height: 180px;
  }
  
  @media (max-width: 800px) {
    max-width: 600px;
    max-height: 170px;
  
  }

  @media (max-width: 720px) {
    top: ${({ screen }) => screen /4 + 'px'};
    max-width: 400px;
    max-height: 100px;
 
   
  }
  @media (max-width: 560px) {
    top: ${({ screen }) => screen /2 + 'px'};
    flex-direction: column;
    max-width: 200px;
    max-height: 150px;
 
  }
`;

const Word = styled.span<{ text: string; length: number; fontSize: number }>`
  border-right: ${({ text, length }) =>
    text.length >= length ? 'none' : '2px solid #fff'};
  color: #fff;
  font-family: 'Silkscreen', cursive;
  font-size: ${({ fontSize }) => fontSize / 35 + 'px'};
  overflow: hidden;
  display: block;
  white-space: nowrap;
  align-self: center;
  justify-self: center;
  animation: blinkCursor 0.5s infinite;
  transition: 1s;
  grid-column: 2;
  @media (max-width: 700px) {
 
    font-size: ${({ fontSize }) => fontSize / 25 + 'px'};
   
  }
`;
const Int = styled.div`
  display: grid;
  place-content: center;
`;

interface Props {
  screen: number;
  tam: number;
}

const Intro = ({ screen, tam }: Props) => {

  const [text] = useTypewriter({
    words: ['Sistema Iniciado', 'Luciano Martinello'],
    loop: 1,
  });

  const [text2] = useTypewriter({
    words: ['', '', 'Desenvolvedor'],
    loop: 1,
  });

  const [text3] = useTypewriter({
    words: ['', '', '', 'Front End'],
    loop: 1,
  });
  const [text4] = useTypewriter({
    words: ['', '', '', '', 'UX/UI Designer'],
    loop: 1,
  });

  return (
    <>
      <ContainerIntro tam={tam} screen={screen} text={text}>
        <img src={texfoto} alt="foto perfil" />

        <Int>
          <Word
            fontSize={screen}
            text={text}
            length={18}
            className="title-inicial"
          >
            {text}{' '}
          </Word>
          <Word
            fontSize={screen}
            text={text2}
            length={13}
            className="title-inicial"
          >
            {text2}
          </Word>
          <Word
            fontSize={screen}
            text={text3}
            length={11}
            className="title-inicial"
          >
            {text3}
          </Word>
          {/* <Palavra
            fontSize={screen}
            text={text4}
            length={14}
            className="title-inicial"
          >
            {text4}
          </Palavra> */}
        </Int>
      </ContainerIntro>
    </>
  );
};

export default Intro;
