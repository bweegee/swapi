import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function People() {
  const[people, setPeople] = useState([])
  const[prev, setPrev] = useState()
  const[next, setNext] = useState()
  const[planet, setPlanet] = useState()

  useEffect(()=> {
    axios.get('https://swapi.co/api/people/')
      .then( res => {
        setPeople(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
        setPlanet(res.data.results.planet)
      })
  }, []);

  const renderPeople = people.map(p => (
    <Div>
      {p.name}
    </Div>
  ))

  const handleNext = (e) => {
    e.preventDefault();
    axios.get(`${next}`)
      .then( res => {
        setPeople(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
      })
  }

  const handlePrev = (e) => {
    e.preventDefault();
    axios.get(`${prev}`)
      .then( res => {
        setPeople(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
      })
  }

  return (
      <Div>
    <Grid>
      {renderPeople}
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
