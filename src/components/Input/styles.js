import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > label {
        font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;

export const Field = styled.div`

    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.4rem;


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    border-radius: .5rem;


    > input {
        width: 100%;
        border: none;
        
        font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
        font-size: 1.6rem;
        
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

`;
