import styled from 'styled-components';


export const Container = styled.div`
    width: auto;
    height: 3.2rem;
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : "none"};

    border-radius: 1rem;
    /* margin-bottom: 18px; */
    padding-right: 1.6rem;

    padding: 16px;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;
        color: ${({ theme, isnew }) => isnew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};
        font-size: 2.4rem;
        text-align: center;
    }


    > input {
        height: 5rem;
        width: 100%;
        padding: 0.8rem 0.8rem 0.8rem 1.6rem;

        font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.6rem;
        background: transparent;

        border: none;

        &::placeholder {

            color: ${({ theme }) => theme.COLORS.GRAY_500};
            font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
            font-size: 1.6rem;

        }
    }
`;