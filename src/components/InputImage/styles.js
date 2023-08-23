import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  > label {
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    color: #C4C4CC;
  }
`;

export const Field = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  cursor: pointer;


  p {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};


  > input {
    /* display: none; */
    /* background-color: transparent; */

  }

  > svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;