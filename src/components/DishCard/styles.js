import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 210px;
    height: 292px;

    border-radius: 8px;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    place-items: center;
    gap: 12px;

    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    > .alter-favorite {
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        place-self: flex-end;


        svg {
            font-size: 2.4rem;
        }
    }

    > img {
        width: 88px;
        margin: auto;
        cursor: pointer;
    }

    > .name {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};

        white-space: nowrap;

        cursor: pointer;
    }


    > .description {
        display: none;
    }

    > .price {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    
        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
    }

    > .container-buy {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;

        > .button-include {
            height: 32px;
            width: 162px;
        }
    }
 
   

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        width: 300px;
        height: 462px;

        > img {
            width: 176px;
            height: 176px;
            margin: auto;
        }

        > .name {
            white-space: nowrap;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
            font-family: ${({ theme }) => theme.FONTS.POPPINS.BOLD_300.fontFamily};
            font-size:   ${({ theme }) => theme.FONTS.POPPINS.BOLD_300.fontSize};
            font-weight: ${({ theme }) => theme.FONTS.POPPINS.BOLD_300.fontWeight};
            
        }

        > .description {
            display: flex;
            justify-content: center;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
            font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontFamily};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontSize};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontWeight};
        }

        > .price {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
    
            font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_32.fontFamily};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_32.fontSize};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_32.fontWeight};
        }

        > .container-buy {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 12px;

            > .button-include {
                width: 92px;
                height: 48px;
            }
        }
    }
`