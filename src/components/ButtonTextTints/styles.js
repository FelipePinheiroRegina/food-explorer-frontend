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
        color: ${({ theme }) => theme.COLORS.TINTS_400};
        
        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontSize};
        white-space: nowrap;
        
        cursor: pointer;
        
        border: none;
        outline: none;
    }
`