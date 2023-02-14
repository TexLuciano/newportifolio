import React from 'react'
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
  flex-wrap: wrap;
  gap: 10px;
  transform: scale(${({ tam }) => 1 + tam / 2});
  position: absolute;
  transition: 0.5s;
  place-items: center;
  place-content: center;
  z-index: 5;
  display: ${({ tam }) => (tam > 30 ? 'none' : 'flex')};
  img {
    display: block;
    max-width: 350px;
    transition: 1s;
    transform: scale(${({ text }) => (text.length >= 18 ? 1 : 0)});
  }
  div {
    display: grid;
    place-items: center;
  }
  @media (max-width: 1600px) {
    img {
      max-width: 220px;
    }
    span {
      font-size: 2.7rem;
    }
  }
  @media (max-width: 1400px) {
    img {
      max-width: 200px;
    }
    span {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 1040px) {
    img {
      max-width: 150px;
    }
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 850px) {
    img {
      max-width: 100px;
    }
    span {
      font-size: 1.2rem;
    }
    @media (max-width: 520px) {
      top: ${({ screen }) => screen / 2 + 'px'};
      flex-direction: column;
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

interface Props{
screen:number
tam:number
}

const Intro = ({screen, tam}:Props) => {

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
   <ContainerIntro tam={tam} screen={screen} text={text}>
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
   </>
  )
}

export default Intro