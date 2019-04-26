import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Person from './Person'

export default function People() {
  const[people, setPeople] = useState([])
  const[prev, setPrev] = useState()
  const[next, setNext] = useState()
  const[planet, setPlanet] = useState([])

  useEffect(()=> {
    axios.get('https://swapi.co/api/people/')
      .then( res => {
        setPeople(res.data.results)
        setPrev(res.data.previous)
        setNext(res.data.next)
      })
  }, []);

  const renderPeople = people.map((p, index) => (
     // axios.get(`${p.homeworld}`)
     //   .then( res => {
     //     debugger
     //      setPlanet.push(res.data.name)
     //     console.log(planet)
     //   })
    <Div key={index}>
      <h2>{p.name}</h2>
      {getPlanetName(`${p.homeworld}`)}
    </Div>
    ))
  
   function getPlanetName(url) {
     axios.get(`${url}`)
       .then( res => {
         debugger
         console.log(res.data.name)
         setPlanet(...res.data.name)
         console.log(planet)
         return (
           res.data.name
         )
       })
   }

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
  background: black
  justify-content: center;
`

const Div = styled.div`
  padding: 5px;
  color: yellow;
`
