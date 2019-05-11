import React, { Fragment, useState, useEffect, } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Person from './Person'

export default function People() {
  const[people, setPeople] = useState([])
  const[prev, setPrev] = useState()
  const[next, setNext] = useState()
  const[isLoading, setIsLoading] = useState(false)
  const[url, setUrl] = useState(
    'https://swapi.co/api/people/'
  )

  useEffect(()=> {
    const fetchData = async () => {

      setIsLoading(true);

      const res = await axios(url);

      setPrev(res.data.previous);
      setNext(res.data.next);
      setPeople(res.data.results);
      setIsLoading(false);
    };

    fetchData();

  }, [url]);
  
  return (
    <Fragment>
    {isLoading ? (
      <Load>Loading ...</Load>
    ) : (
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
      { prev !== null ? <Button onClick={() => setUrl(prev)}>prev</Button> : null }
      { next !== null ? <Button onClick={() => setUrl(next)}>next</Button> : null }
    </Div>
    )}
  </Fragment>
  )

}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-left: 20px;
`

const Div = styled.div`
  color: #FFE81F;
`

const Load = styled.div`
  color: #FFE81F;
  align-items: center;
  font-size: 1.2rem;
`

const Button = styled.button`
  font-family: Starjout;
  font-size: 1.5rem;
  color: black;
  background-color: #FFE81F;
  padding: 10px;
  margin: 10px;
`
