import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Homeworld({ planet }) {
  const [homeworld, setHomeworld] = useState([])

  // useEffect(()=> {
  //   axios.get(`${planet}`)
  //     .then( res => {
  //       setHomeworld(res.data)
  //     })
  // }, []);

  return (
    <div>
    </div>
  )
}