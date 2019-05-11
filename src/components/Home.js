import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <Div>
      <Header>Star</Header>
      <Header>Wars</Header>
      <Header>api</Header>
    </Div>
  )
}

const Header = styled.h1`
  color: #FFE81F;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: STJEDISE
  text-align: center;
`
const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 3rem;
`
