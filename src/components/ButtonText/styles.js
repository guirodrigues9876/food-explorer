import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  font-family: ${({ theme }) => theme.FONT.POPPINS};
  font-weight: 500;
  font-size: 2.4rem;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  align-items: center;

  > svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  @media (min-width: 1024px) {
    font-weight: 700;
  }
`;