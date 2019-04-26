import React, { useState, useEffect, } from 'react'
import axios from 'axios'

export default function Planets() {
  const[planets, setPlanets] = useState([])

  useEffect(()=> {
  axios.get('https://swapi.co/api/planets/')
    .then( res => {
      setPlanets(res.data.results)
      console.log(planets)
    })
  }, []);

  return (
    <>
    Planets
    </>
  )

}
