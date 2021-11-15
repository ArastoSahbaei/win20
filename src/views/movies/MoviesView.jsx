import styled from "styled-components"

export const MoviesView = () => {
   return (
      <div>
         <H1 isColored="blue">NjetFlix</H1>
         <H1>NjetFlix</H1>
      </div>
   )
}

const H1 = styled.h1`
   color: ${props => props.isColored ? props.isColored : 'red'};
`
