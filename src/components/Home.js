import React, { Fragment } from 'react'
import logo from '../images/SWLogo.png'
import styled from 'styled-components'

export default function Home() {
  return (
    <Div>
      <img src={logo} alt='star wars logo' />
      <h1>API</h1>
    </Div>
  )
}

const Div = styled.div`
  color: #FFE81F;
  margin: auto;
`
