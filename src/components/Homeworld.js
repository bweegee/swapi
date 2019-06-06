import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Homeworld(props) {
  const planet = props.match.params.name
  const [planetInfo, setPlanetInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)

   useEffect(()=> {
     const fetchData = async () => {
      setIsLoading(true);
    
      const res = 
      await axios.get(`https://swapi.co/api/planets/?search=${planet}`)
       debugger
      setPlanetInfo(res.data.results);
       console.log(planetInfo);
      setIsLoading(false);
     }
    
     fetchData();
   }, []);

  const { name, rotation_period, orbital_period, diameter, gravity, climate, terrain, surface_water, population } = planetInfo

  return (
    <Div>
      <h1>{planet}</h1>
      <h3>Climate: {climate}</h3>
      <h3>Terrain: {terrain}</h3>
      <h3>Population: {population}</h3>
    </Div>
  )
}

const Div = styled.div`
  color: #FFE81F;
`
