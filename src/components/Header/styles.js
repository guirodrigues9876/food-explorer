import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    grid-area: header;
    width: 100%;
    height: 11.4rem;

    border: 1px solid yellow;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SIGN};

    display: flex;
    justify-content: center;
`;

export const Menu = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 2.8rem 0 2.8rem;

    border: 1px solid red;

    > button:nth-child(1) {
        border: none;
        background: transparent;

        svg {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }

        @media(min-width: 1024px) {
          display: none;
        }
    }

    .mobile {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        position: relative;

    div {
      display: grid;
      place-items: center;

      position: absolute;
      width: 2rem;
      height: 2rem;

      top: -12px;
      left: 15px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_300};
      border-radius: 99px;

      font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
      font-weight: 500;
      font-size: 1.4rem;
    }
  }

  @media(min-width: 1024px) {
    padding: 2.4rem 0 2.4rem 12.3rem;

    .mobile {
      display: none;
    }

    > svg:nth-child(1) {
      display: none;
    }
  }
`;

export const Desktop = styled.div`
  display: none;


  a { 
    width: 21.6rem;
    height: 4.8rem;
    padding: 1.2rem 3.2rem;
  
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_300};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: .5rem;

    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

  };

  @media(min-width: 1024px) {
    display: flex;
    gap: 3.2rem;
    align-items: center;

    > button:nth-child(1) {
      border: none;
      
      display: flex;
      gap: .8rem;

      width: 21.6rem;
      height: 4.8rem;
      padding: 1.2rem 3.2rem;
    
      justify-content: center;
      align-items: center;
    
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_300};
      color: ${({ theme }) => theme.COLORS.WHITE};
    
      border-radius: .5rem;

      font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
`

export const Search = styled.div`
  display: none;

  @media(min-width: 1024px) {
    display: flex;
    margin: 0 4rem;

    width: 60rem;

    height: 4.8rem;
    padding: 1.2rem 1.4rem;

    align-items: center;
    gap: 1.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px;

    > svg {
      margin: 0 0.3rem 0 1rem;
    }

    > input {
      font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;

      width: 100%;

      color: ${({ theme }) => theme.COLORS.WHITE};

      background: transparent;
      border: 0;

      &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
      }
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  margin-right: 15px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  
`;