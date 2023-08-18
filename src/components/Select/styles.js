import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  select {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: transparent;
    
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
    line-height: 160%;
    padding: 1.6rem;

    outline: none;

    option {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`

export const Field = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  height: 4.8rem;
  border-radius: .5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-right: 1.6rem;
  }
`