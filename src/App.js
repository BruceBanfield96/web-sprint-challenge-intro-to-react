import React, { useState, useEffect } from 'react';
import StarWarsCharacter from './components/Character';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starwarsCharacter, setStarWarsCharacter] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setStarWarsCharacter(res.data);
    })
    .catch(err => console.error(err))
  }, []);

  const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 2px solid green;
  `

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv>
        {starwarsCharacter.map((characterData) => {
          return <StarWarsCharacter data = {characterData} />
        })}
      </StyledDiv>
    </div>
    

  );
}

export default App;
