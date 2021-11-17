import styled from "styled-components"

export const MoviesView = () => {
   return (
      <Wrapper>
         <H1 isColored="blue">NjetFlix</H1>
         <H1>NjetFlix</H1>
         <Image src={'https://thispersondoesnotexist.com/image'} alt={'error'} />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   background-color: red;
   display: grid;
   grid-template-columns: repeat(10, 1fr);
   grid-template-rows: repeat(3, 1fr);
`

const Image = styled.img`
   width: 50%;
   grid-column: 5/6;
`

const H1 = styled.h1`
   color: ${props => props.isColored ? props.isColored : 'white'};
   grid-column: 7/8;
   grid-row: 3/3;
`
