import React from 'react';
import styled from 'styled-components';
import './app.css';
import Home from './pages/Home';
import './style/styleinicial.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contato from './pages/Contato';

const Container = styled.div`
  
`;

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/contato' element={<Contato/>} />
      </Routes>
    </Router>
  );
}

export default App;
