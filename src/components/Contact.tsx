import React from 'react'
import insta from '../img/insta.svg'
import whats from '../img/whats.svg'
import lk from '../img/linkedin.svg'
import styled from 'styled-components'

const Container = styled.div`


display: flex;
place-content: center;
top: 50px;
left: 20px;
gap: 10px;
div{


  img{
    max-width: 60px;
    display: block;
  }
}


`

const Contact = () => {
  return (
    <Container>
      <div><img src={insta} alt="" /></div>
      <div><img src={lk} alt="" /></div>
      <div><img src={whats} alt="" /></div>
    </Container>
  )
}

export default Contact