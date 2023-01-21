// Write your Character component here

import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
border-radius: 3px;
border: 2px solid green;
`;

const StarWarsCharacter = props => {
    const {data} = props
    return (
        <StyledDiv>
            <h1> Details for {data.name}</h1>
            <p> Character's BirthYear: {data.birth_year}</p>
            <p> Character's Height: {data.height}</p>
            <p> Character's Gender: {data.gender}</p>
        </StyledDiv>
    )
}

export default StarWarsCharacter;
