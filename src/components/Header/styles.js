import styled from "styled-components"

export const Container = styled.div`
    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        display: none;
    }

    position: fixed;
    top: 0;
    grid-area: top;
    height: 11.4rem;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 28px;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    svg {
        font-size: 2.0rem;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        > img {
            height: 2.4rem;
            width: 2.4rem;
        }

        > h1 {
            font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontSize};
        }

        > .admin {
            height: 100%;
            display: flex;
            align-self: center;

            color: ${({ theme }) => theme.COLORS.CAKE_200};

            font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontSize};
        }
    }
`

export const ContainerReceipt = styled.div`
    position: relative;

    display: ${({ $isAdmin }) => $isAdmin ? 'block': 'none'};
    opacity:    ${({ $isAdmin }) => $isAdmin ? '0': '1'};
    visibility: ${({ $isAdmin }) => $isAdmin ? 'hidden': 'visible'};
    cursor: pointer;
`

export const Count = styled.small`
    position: absolute;
    right: -10px;
    top: -10px;

    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
    font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TINTS_100};
    height: 20px;
    width: 20px;
    border-radius: 50%;

    display: flex;
    text-align: center;
    justify-content: center;
`