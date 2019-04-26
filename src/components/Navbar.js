import React from 'react'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'

export default function Navbar() {
  return (
    <List>
      <Item>
        <Link to='/People'>
          People
        </Link>
      </Item>
      <Item>
        <Link to='/Planets'>
          Planets
        </Link>
      </Item>
    </List>
  )
}

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: inline-block;
  width: 60px;
  padding: 10px 5px;
`
