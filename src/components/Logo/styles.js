import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  > img {
    width: 16.1rem;
  }

  > p {
      font-size: 1.2rem;
      font-family: ${({ theme }) => theme.FONT.ROBOTO};
      color: ${({ theme }) => theme.COLORS.CYAN};
  }

  @media (min-width: 1024px) {
    width: auto;
    flex-direction: column;
    align-items: flex-end;
    
    > img {
      width: 19.7rem;
    }
  }
`;