import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  > label {
    width: 100%;
    height: 100px;
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;

    cursor: pointer;
    color: #C4C4CC;
  }
`;

export const Field = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    visibility: hidden;
    position: fixed; 
    left: -9000px
  }

  > svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;