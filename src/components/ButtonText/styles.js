import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    button {
        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};
        
        cursor: pointer;
        
        border: none;
        outline: none;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        svg {
            font-size: 2.4rem;
        }

        button {
            font-family: ${({ theme, $auth }) => $auth ? theme.FONTS.POPPINS.MEDIUM_100.fontFamily : theme.FONTS.POPPINS.BOLD_300.fontFamily};
            font-weight: ${({ theme, $auth }) => $auth ? theme.FONTS.POPPINS.MEDIUM_100.fontWeight : theme.FONTS.POPPINS.BOLD_300.fontWeight};
            font-size: ${({ theme, $auth }) => $auth ?  theme.FONTS.POPPINS.MEDIUM_100.fontSize: theme.FONTS.POPPINS.BOLD_300.fontSize};
        }
    }
`