import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Person({ person }) {
  const [homeworld, setHomeworld] = useState([])

  useEffect(()=> {
    axios.get(`${person.homeworld}`)
      .then( res => {
        setHomeworld(res.data.name)
      })
  }, [person.homeworld]);

  return (
    <div>
      <h2>{person.name}</h2>
      <h4>{homeworld}</h4>
    </div>
  )
}

const Div = styled.div`

`
