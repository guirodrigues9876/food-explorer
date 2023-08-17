import styled from 'styled-components';

export const Container = styled.div`
    min-width: 30rem;
    height: 100vh;

    display: grid;

    grid-template-rows: 11.4rem auto;
    grid-template-areas: 
    "header"
    "content"
    "footer"
  ;   
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    grid-area: content;

    @media(min-width: 1024px) {
    padding: 0 12.4rem;
  }
`;