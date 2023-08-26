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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  grid-area: content;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
  
    width: 100%;
    max-width: 1122px;
    
    @media(min-width: 1024px) {
      /* padding: 0 12.4rem; */
    }
`;


export const Banner = styled.div`
  width: calc(100% - 4rem);
  height: 8rem;
  margin: 4.4rem 1.6rem 6.2rem 2rem;
  
  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: ${({ theme }) => theme.FONT.POPPINS};
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: .8rem;

  position: relative;

  .flavors {
    width: 50%;
    height: 100%;

    > img {
      width:clamp(13.938rem, -0.612rem + 36.915vw, 21rem);
      object-fit: cover;
      align-self: end;

      position: absolute;
      bottom: 0;
      left: -30px;
    }

  }

  .title {
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

  @media(min-width: 491px){
    height: 100px;

  }

  @media(min-width: 1024px) {
    
    margin-top: 10rem;
    height: 260px;

    .flavors {

      > img {
        width:clamp(55rem, -0.612rem + 36.915vw, 55rem);
      }

    }
    .title {

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

