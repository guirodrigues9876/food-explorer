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
`;

export const Main = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  grid-area: content;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(min-width: 1024px) {
    padding: 0 12.4rem;
    }
`;


export const Banner = styled.div`
  min-width: 37rem;
  margin: 4.4rem 0 6.2rem;

  font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};

  display: flex;
  align-items: center;

  position: relative;
  
  &::after {
    content: "";
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    position: absolute;
    border-radius: .8rem;
    width: 100%;
    height: 85%;
    z-index: -1;
    bottom: 0;
    left: 15px;
    
  }

  img {
    width:clamp(11rem, -0.612rem + 46vw, 39.5rem);
    object-fit: cover;
    align-self: end;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .3rem;

    h1 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  @media(min-width: 1024px) {
    width: 112rem;
    height: 26rem;

    div {
      margin-left: 10rem;

      h1 {
        font-size: 4rem;
        font-weight: 500;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }
`;

