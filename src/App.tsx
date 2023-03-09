import React, { FunctionComponentElement, useState } from 'react';
import styled from 'styled-components';
import './app.css';
import Home from './pages/Home';
import './style/styleinicial.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';

const Container = styled.div``;

function App() {
  const spinner = document.getElementById('spinner');
  const [load, setLoad] = useState(true);

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoad(false);
    }, 1100);
  }

  return (
    <>
      {!load && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
