import styled from "styled-components"

export const Container = styled.div`
    width: max-content;
    padding: 1rem 4rem;
    background-color: ${({ theme }) => theme.COLORS.TINTS_100};
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    border-radius: 3px;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.0rem;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        padding: 1.2rem 2.4rem;
    }
`

export const Count = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
    font-size: 1.2rem;
    
    cursor: pointer;
    
    border: none;
    outline: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        font-size: 1.4rem;
    }
`