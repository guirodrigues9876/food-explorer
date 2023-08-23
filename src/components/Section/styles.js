import styled from 'styled-components';

export const Container = styled.section`
    margin: 2.4rem;

    > h2 {
        
        font-family: ${({ theme }) => theme.FONT.POPPINS};
        font-size: 1.8rem;
        font-weight: 500;  
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-bottom: 2.4rem;
    }

    @media (min-width: 1024px){
        
        > h2 {
            font-size: 3.2rem;
        }
    }
`;