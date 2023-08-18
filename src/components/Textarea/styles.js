import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;

    > label {
        font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
        font-weight: 400;
        font-size: 1.6rem;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    textarea {
        height: 17.2rem;
        resize: none;
        padding: 1.4rem;
        border-radius: .8rem;
        border: none;
        
        font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
        font-weight: 400;
        font-size: 1.6rem;
        
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        color: ${({ theme }) => theme.COLORS.WHITE};
 
    }

    &::placeholder{
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
    }
`;
