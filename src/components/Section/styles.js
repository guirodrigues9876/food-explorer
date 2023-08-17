import styled from 'styled-components';

export const Container = styled.section`
    margin-left: 2.4rem;

    > h2 {
        
        font-family: 'Poppins';
        font-size: 1.8rem;
        font-weight: 500;  
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;