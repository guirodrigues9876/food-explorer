import styled from "styled-components";


export const Container = styled.div`
    width: 21rem;
    height: fit-content;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    padding: 2.4rem; 

    border: 1px solid #000204;
    border-radius: .8rem;
    position: relative;

    > svg {
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
    }

    > img {
        width: 8.8rem;
        height: 8.8rem;
        object-fit: cover;
    }

    > span {
        font-family: ${({ theme}) => theme.FONT.ROBOTO};
        font-weight: 400;
        font-size: 1.6rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.CYAN};
    }

    .pencil{
        align-self: flex-end;
    
        svg{
          fill: ${({ theme }) => theme.COLORS.WHITE};
        } 
    }

    @media(min-width: 1024px) {
        width: 34rem;
        height: fit-content;
        
        > img {
            width: 17.6rem;
            height: 17.6rem;
            object-fit: cover;
        }

        > span {
            font-size: 3.2rem;
        }
    }

`;


export const Title = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  h2 {
    font-family: ${({ theme}) => theme.FONT.POPPINS};
    font-weight: 500;
    font-size: 1.4rem;
    text-align: center;

    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    display: flex;
    gap: .2rem;
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border: none;
    background: transparent;
  }

  @media (min-width: 1024px) {
    h2 {
      font-weight: 700;
      font-size: 2.4rem; 
    }
}
`;

export const Description = styled.div`
    display: none;
    
    @media(min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        
        > p {
            display: block;
            text-align: center;
            font-size: 1.4rem;
            font-family: ${({ theme }) => theme.FONT.ROBOTO};
            line-height: 160%;
            
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            max-width: 25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;


export const Picker = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;

    > span {
        font-family: ${({ theme}) => theme.FONT.ROBOTO};
        font-weight: 400;
        font-size: 1.6rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

`;

export const Order = styled.div`
  /* display: ${({ admin }) => admin ? 'none' : 'flex'}; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  

  @media(min-width: 1024px) {
    flex-direction: row;
    margin-top: 1.5rem;

    span {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`