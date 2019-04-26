import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Planets() {
  const[planets, setPlanets] = useState([])
  const[prev, setPrev] = useState()
  const[next, setNext] = useState()

  useEffect(()=> {
  axios.get('https://swapi.co/api/planets/')
    .then( res => {
      setPlanets(res.data.results)
      setPrev(res.data.previous)
      setNext(res.data.next)
    })
  }, []);

  const renderPlanets = planets.map(p => (
    <Div>
      <h2>{p.name}</h2>
    </Div>
  ))

  const handleNext = (e) => {
    e.preventDefault();
    axios.get(`${next}`)
      .then( res => {
        setPlanets(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
      })
  }

  const handlePrev = (e) => {
    e.preventDefault();
    axios.get(`${prev}`)
      .then( res => {
        setPlanets(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
      })
  }

  return (
      <Div>
    <Grid>
      {renderPlanets}
      <br />
    </Grid>
        { prev !== null ? <button onClick={handlePrev}>prev</button> : null }
        { next !== null ? <button onClick={handleNext}>next</button> : null }
      </Div>
  )

}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  align-items: center;
  background: black
`

const Div = styled.div`
  align-items: center;
  padding: 5px;
  color: yellow;
`
