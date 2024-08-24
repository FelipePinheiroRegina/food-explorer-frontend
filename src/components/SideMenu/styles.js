import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    inset: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    > div:nth-child(3) {
        position: fixed;
        bottom: 0;
    }
    
    display: none;

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        display: block;

        transform: translateX(-100%);
        transition: 0.3s;
        
        &[data-menu-is-open="true"] {
            transform: translateX(0);
        }
    }
`



export const Top = styled.div`
    height: 11.4rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: end;

    padding: 24px 28px;

    > div {
        display: flex;
        align-items: center;
        gap: 16px;

        span {
            font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
            font-size: 2.0rem; 
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
        
        svg {
            font-size: 2.4rem;
        }
    }
`

export const Nav = styled.div`
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
`

export const Option = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    text-align: left;
    border: none;
    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000}; 

    background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: ${({ theme }) => theme.FONTS.POPPINS.LIGHT.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS.LIGHT.fontWeight};
    font-size: ${({ theme }) => theme.FONTS.POPPINS.LIGHT.fontSize};

    cursor: pointer;
`