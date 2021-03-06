import React, { Fragment, useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'

export default function Person({ person }) {
  const [homeworld, setHomeworld] = useState(null)
  const[isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    const fetchData = async () => {
      setIsLoading(true);

      const res = await axios(`${person.homeworld}`);
      setHomeworld(res.data.name);
      setIsLoading(false);
    }

    fetchData();
  }, [person.homeworld]);

  return (
    <Fragment>
      {isLoading ? (
        <div> </div>
      ) : (
    <GridCell>
      <Name>{person.name}</Name>
      <Link to={`/homeworld/${homeworld}`}>
        <h4>{homeworld}</h4>
      </Link>
    </GridCell>
      )}
  </Fragment>
  )
}

const Name = styled.h1`
  font-size: 2rem;
`
const GridCell = styled.div`
  padding: 10px;
`
