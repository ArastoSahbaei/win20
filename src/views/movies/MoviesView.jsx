import styled from "styled-components"
import Teacher from '../../shared/images/teacher.svg'

export const MoviesView = () => {
   return (
      <Div>
         <H1>NjetFlix</H1>
         <Image src={Teacher} alt={'Error'} />
      </Div>
   )
}

const Div = styled.div`
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: repeat(3, 1fr);
   background-color: orange;
`

const H1 = styled.h1`
   color: ${props => props.isColored ? props.isColored : 'red'};
   grid-column: 8/9;
   grid-row: 2/3;
`

const Image = styled.img`
   width: 100%;
   grid-column: 1/2;
   grid-row: 1/1;
`
