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
        setPrev(res.data.previous)
        setNext(res.data.next)
        setPeople(res.data.results)
      });
  }, []);

  // useEffect(()=> {
  //           people.map( p => {
  //             axios.get(`${p.homeworld}`)
  //               .then( res => {
  //                 setPlanet([planet, ...res.data.name])
  //                 console.log(res.data.name)
  //               })
  //           })
  // }, []);

  // function getPlanet(url) {
  //    axios.get(`${url}`)
  //      .then( res => {
  //        debugger
  //        console.log(res.data.name)
  //        setPlanet(res.data.name)
  //      });
  //  }

  // const renderPeople = people.map((p, index) => (
  //    // axios.get(`${p.homeworld}`)
  //    //   .then( res => {
  //    //     debugger
  //    //      setPlanet.push(res.data.name)
  //    //     console.log(planet)
  //    //   })
  //   <Div key={index}>
  //     <h2>{p.name}</h2>
  //     {getPlanet(`${p.homeworld}`)}
  //     {planet}
  //   </Div>
  //   ))
  
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
      { people.map( (p, index) => (
        <Person
          key={index}
          person={p}
        />
      ))}
      <br />
    </Grid>
        { prev !== null ? <Button onClick={handlePrev}>prev</Button> : null }
        { next !== null ? <Button onClick={handleNext}>next</Button> : null }
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
  color: #FFE81F;
`

const Button = styled.div`
  font-size: 1.2rem;
  color: black;
  background-color: #FFE81F;
`
  
