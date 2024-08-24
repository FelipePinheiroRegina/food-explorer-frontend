import styled from "styled-components"

export const Container = styled.div`
    margin-top: 25px;

    grid-area: foot;

    width: 100%;
    height: 7.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontSize};
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        padding: 0 123px;
        justify-content: space-between;

        > span {
            font-size: 1.4rem;
        }
    }
`

export const SloganFooter = styled.div`
    display: flex;
    align-items: center;
    gap: .7rem;
    
    > img {
        height: 2.2rem;
        width: 2.2rem;
    }

    > strong {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontSize};
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        > img {
            width: 3.0rem;
            height: 3.0rem;
        }
        
        > strong {
            font-size: 2.4rem;
        }
    }
    
`