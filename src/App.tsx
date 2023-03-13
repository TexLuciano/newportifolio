import React, { FunctionComponentElement, useState } from 'react';
import styled from 'styled-components';
import './app.css';
import Home from './pages/Home';
import './style/styleinicial.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';
import { Loader } from './components/loader';


const Container = styled.div``;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1100);

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
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
