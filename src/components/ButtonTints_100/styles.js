import styled from "styled-components"

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TINTS_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
    font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};

    height: 4.8rem;
    width: 100%;
    border: none;
    border-radius: .5rem;

    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        height: max-content;
        padding: 1.2rem 2.4rem;
    }
`