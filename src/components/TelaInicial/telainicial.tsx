import React, { useEffect, useState, MouseEvent } from 'react';
import '../../app.css';
import '../../style/styleinicial.css';
import principal from '../../img/testbg.png';
import mobile from '../../img/mobile.png';
import telafixa from '../../img/telafixa.png';
import ponteiro1 from '../../img/ponteiro1.svg';
import ponteiro2 from '../../img/ponteiro2.svg';
import ponteiro3 from '../../img/ponteiro3.svg';
import Intro from '../Intro';
import * as C from './style';

export function TelaInicial({ valorScroll }: { valorScroll: number }) {
  const [ligarLuz, setLigarLuz] = useState(0);
  const [background, setBaground] = useState(telafixa);
  const [screen, setScreen] = useState(window.innerWidth);

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
    if (screen < 720) {
      setBaground(mobile);
    } else {
      setBaground(principal);
    }
  }, [screen]);

  return (
    <>
      <C.Container tam={valorScroll}>
        <C.Div className="container-clock">
          {screen && (
            <C.Principal
              screen={screen}
              onMouseMove={ligar}
              className="computer"
              src={background}
              tam={valorScroll / 50}
              alt=""
            />
          )}

          <C.ContainerLamp tam={valorScroll} ligar={ligarLuz}>
            <div></div>
          </C.ContainerLamp>
          <C.Clock className="clock1" tam={valorScroll}>
            <img src={ponteiro1} />
          </C.Clock>
          <C.Clock2 className="clock2" tam={valorScroll}>
            <img src={ponteiro2} alt="" />
          </C.Clock2>
          <C.Clock3 className="clock3" tam={valorScroll}>
            <img src={ponteiro3} />
          </C.Clock3>
        </C.Div>
        <Intro screen={screen} tam={valorScroll} />
      </C.Container>
    </>
  );
}
