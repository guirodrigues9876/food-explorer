import styled from 'styled-components';

export const Container = styled.footer`
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    width: 100%;
    height: 7.7rem;

    padding: 2rem;

    span {
        font-size: 1rem;
        text-align: right;
        font-family: ${({ theme }) => theme.FONT.FONT_DM};
        color: ${({ theme }) => theme.COLORS.WHITE_200};
    }

    @media(min-width: 1024px) {
        padding: 2.4rem 12.3rem;

        span {
            font-size: 1.4rem;
            font-weight: 400px;
            font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};

        }
    }
`;