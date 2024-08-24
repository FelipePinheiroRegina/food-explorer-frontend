import styled from "styled-components"

export const Container = styled.div`
    display: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        display: flex;

        position: fixed;
        top: 0;
        grid-area: top;
        height: 11.4rem;
        width: 100%;
        z-index: 10;
    

        background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }   
`

export const Content = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 32px;

    > .slogan {
        > .text {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                height: 30px;
                width: 30px;
            }

            h1 {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_24.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_24.fontWeight};
                font-size: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_24.fontSize};
            }
        }
        
        > .admin {
            display: flex;
            justify-content: flex-end;

            color: ${({ theme }) => theme.COLORS.CAKE_200};

            font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontSize};
        }
    }

    > .log-out {
        font-size: 22px;
        cursor: pointer;
    }
`

export const InputSearch = styled.div`
    width: 100%;
    height: 48px;
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 14px;
    
    overflow: hidden;
  
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    span {
        width: 30%;
        text-align: right;
        svg {
            font-size: 24px;
        
        }
    }

    > input {
        width: 50%;
        height: 48px;
        
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`

export const MyFavorites = styled.div`
    > #favorites {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`

export const ContainerReceipt = styled.div`
    width: 200px;
    height: 56px;
    overflow: hidden;

    background-color: ${({ theme }) => theme.COLORS.TINTS_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
    border: none;
    border-radius: 5px;

    > .customer {
        width: 100%;
        height: 100%;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        
        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 32px;
        }

        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
        border: none;
    }
   
    > .admin-button {
        width: 100%;
        height: 100%;
        
        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
        border: none;
        
        cursor: pointer;
    }
`

export const Count = styled.small`
    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
    font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    text-align: center;
    justify-content: center;
`
export const History = styled.button`
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
    font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    border: none;
    background-color: transparent;
    cursor: pointer;
`