import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import '../app.css';
import SecondTela from '../components/SecondTela';
import { TelaInicial } from '../components/telainicial';
import '../style/styleinicial.css';

const Container = styled.div`
  
`;

function Home() {
  const [valorScroll, setValorScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handlescroll);

    return () => window.removeEventListener('scroll', handlescroll);
  }, []);

  function handlescroll() {
    // const value = window.scrollY;

    const value = window.pageYOffset;
    setValorScroll(value);
  }

  return (
    <Container>
      <TelaInicial valorScroll={valorScroll} />
      <SecondTela valorScroll={valorScroll} />
    </Container>
  );
}

export default Home;