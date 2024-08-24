import styled from "styled-components"

export const Container = styled.span`
    width: max-content;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
    font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};
    
    cursor: text;
    
    padding: 4px 8px;
    border-radius: 5px;
`