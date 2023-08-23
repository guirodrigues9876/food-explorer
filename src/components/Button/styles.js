import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;
  border: 0;
  border-radius: 5px;

  font-family: ${({theme}) => theme.FONT.POPPINS};
  font-size: 1.4rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_300};
  color: ${({ theme }) => theme.COLORS.WHITE};

  `;