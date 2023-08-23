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

export const Content = styled.div`
    grid-area: content;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3.6rem 0 1.6rem 0;
    padding: 0 5.6rem;

    button {
        align-self: flex-start;
        margin-bottom: 1.6rem;
    }

    img {
        width: 26rem;
        height: 26rem;
        object-fit: cover;
    }

    @media(min-width: 1024px) {
        flex-direction: row;
        gap: 4.7rem;

        img {
            width: 39rem;
            height: 39rem;
            margin-top: 4.2rem;
        }
  }

`;


export const Description = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    
    h2 {
        margin: 1.6rem 0 2.4rem 0;
        font-size: 2.7rem;
        font-family: ${({theme }) => theme.FONT.POPPINS};
        font-weight: 500;
    
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    p {
        text-align: center;
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.FONT.POPPINS};
    }
    
    @media(min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        h2 {
            font-size: 4rem;          
        }
        
        > p {
            text-align: left;
            font-size: 2.4rem;
            font-family: ${({ theme }) => theme.FONT.ROBOTO};
            line-height: 160%;
            
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 2.4rem;

  flex-wrap: wrap;
  
  margin: 2.4rem 0 4.8rem 0;

  @media(min-width: 1024px) {
    justify-content: flex-start;
  }
`

export const Picker = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;

    > span {
        font-family: ${({ theme}) => theme.FONT.ROBOTO};
        font-weight: 400;
        font-size: 2.2rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

`;

export const ButtonPurchase = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3.7rem;

    width: 100%;
    gap: .5rem;
    border-radius: .3rem;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_300};

    svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
        text-align: center;
        font-size: 1.3rem;
        font-family: ${({ theme }) => theme.FONT.POPPINS};
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    @media(min-width: 1024px) {
        width: 20rem;
    }
`;  

export const Order = styled.div`
  /* display: ${({ admin }) => admin ? 'none' : 'flex'}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 1.6rem;
  

  @media(min-width: 1024px) {
    flex-direction: row;
    margin-top: 1.5rem;
    justify-content: flex-start;
    align-items: center;

  }
`