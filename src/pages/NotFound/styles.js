import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 320px;
        height: 320px;
        box-shadow: 1px 2px 8px 1px black;
    
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 10px;

        font-family: ${({ theme }) => theme.FONTS.POPPINS.REGULAR_300.fontFamily};

        a {
            color: ${({ theme }) => theme.COLORS.TINTS_100};
        }
    }
`