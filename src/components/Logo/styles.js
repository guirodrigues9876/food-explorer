import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.0rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: .8rem;

    p {
      font-size: 1.2rem;
      font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.CYAN};
    }
  }


 > h1 {
  font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: 4.4rem;
  display: ${(props) => props.display};
  }

  @media(min-width: 1024px) {
    div {
      flex-direction: column;
      width: 6rem;
      gap: 0;
    }

    p {
      align-self: flex-end;
    }
  }
`;