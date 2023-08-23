import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-width: 42.8rem;
`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-width: 31.6rem;
    
    .brand {
    align-self: flex-start;
    }

    .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    
    }

    .wrapper h1 {
        display: none;

    }

    .inputs {
        width: 100%;
        margin: 7.2rem 0 3.2rem 0;

        display: flex;
        flex-direction: column;
        gap: 3.2rem;

    }

    a {
        margin-top: 3.2rem;

        font-family: ${({ theme }) => theme.FONT.POPPINS};
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    @media(min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 10.8rem;
        max-width: 1368px;

        .brand {
            align-self: center;
        }

        .wrapper {
            max-width: 50rem;
            min-height: 54rem;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3.2rem;
            
            padding: 6.4rem;
            border-radius: 1.6rem;
        }

        .inputs {
            gap: 3.2rem;
            margin: 0;
        }

        a {
            margin: 0;
        }

        .wrapper h1 {
            font-family: ${({ theme }) => theme.FONT.POPPINS};
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 140%;

            display: flex;
        }
    }
`;

