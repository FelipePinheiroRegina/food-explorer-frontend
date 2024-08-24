import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    svg {
        font-size: 2.4rem;
        cursor: pointer;
    }

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
    }
    

    > .button-include {
        height: 32px;
        width: 162px;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {

        .count {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontFamily};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontSize};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontWeight};
        }
        
        > .button-include {
            width: 92px;
            height: 48px;
        }
    }
`