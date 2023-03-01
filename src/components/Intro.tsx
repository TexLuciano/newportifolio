import React, {useEffect, useRef, useState} from 'react';
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
  display: flex;
  gap: 10px;
  transform: scale(${({ tam }) => 1 + tam / 2});
  position: absolute;
  transition: 0.5s;
  place-items: center;
  place-content: center;
  z-index: 5;
  display: ${({ tam }) => (tam > 20 ? 'none' : 'flex')};
  width: 100%;
  height: 100%;
  max-width: 1800px;
  max-height: 800px;
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    transition: 1s;
    transform: scale(${({ text }) => (text.length >= 18 ? 1 : 0)});
  }

  @media (max-width: 2520px) {
    width: 1500px;
    height: 500px;
    //top: ${({ screen }) => screen / 2 + 'px'};
    //flex-direction: column;
  }

  @media (max-width: 2225px) {
    width: 1200px;
    height: 350px;
    //top: ${({ screen }) => screen / 2 + 'px'};
    //flex-direction: column;
    span {
      font-size: 4rem;
    }
  }
  @media (max-width: 1900px) {
    width: 1100px;
    height: 350px;
    span {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1665px) {
    width: 1000px;
    height: 300px;
    span {
      font-size: 3rem;
    }
  }
  @media (max-width: 1425px) {
    width: 800px;
    height: 250px;
    span {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 1175px) {
    width: 600px;
    height: 200px;
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 1000px) {
    width: 430px;
    height: 150px;
    span {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 650px) {
    width: 350px;
    height: 100px;
    span {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 550px) {
    flex-direction: column;
    width: 350px;
    height: 250px;
    top: ${({ screen }) => screen / 2 + 'px'};
    span {
      font-size: 1.7rem;
    }

    
  }
  @media (max-width: 470px) {
    flex-direction: column;
    width: 300px;
    height: 180px;
    top: ${({ screen }) => screen / 2 + 'px'};
    span {
      font-size: 1.3rem;
    }
  }
`;

const Palavra = styled.span<{ text: string; length: number }>`
  border-right: ${({ text, length }) =>
    text.length >= length ? 'none' : '2px solid #fff'};
  color: #fff;
  font-family: 'Silkscreen', cursive;
  font-size: 5rem;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  align-self: center;
  justify-self: center;
  animation: blinkCursor 0.5s infinite;
  transition: 1s;
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
    words: ['', '', '', 'Front End &'],
    loop: 1,
  });
  const [text4] = useTypewriter({
    words: ['', '', '', '', 'UX/UI Designer'],
    loop: 1,
  });



  return (
    <>
      <ContainerIntro tam={tam} screen={screen} text={text}    >
        <img src={texfoto} alt="foto perfil" />

        <Int>
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
        </Int>
      </ContainerIntro>
    </>
  );
};

export default Intro;
