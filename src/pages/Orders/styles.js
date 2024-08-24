import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh; 

    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas: 
    "top"
    "main"
    "foot"
    ;
    
`

export const Content = styled.div`
    grid-area: main;
    margin-top: 156px;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG})  {
        display: grid;
        grid-template-columns: 400px 600px;
        justify-self: center;
    }
`

export const DetailsDish = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 20px; 
    
    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize}; 

        margin-bottom: 32px;
    }

    > #total {
        margin-top: 10px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200.fontSize}; 
    }

    > #advance {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        button {
            width: 60%;
        }

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG})  {
            display: none;
        }
    }

    &[data-open-form-payments="true"] {
        display: none;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG})  {
        width: 100%;
    }
`

export const Dish = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;

    > img {
        width: 72px;
        height: 72px;
    }

    > .name-and-remove {
        display: flex;
        flex-direction: column;
        gap: 6px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};
        
        span {
            display: flex;
            gap: 10px;

            sup {
                color: ${({ theme }) => theme.COLORS.LIGHT_400};

                font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontWeight};
                font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_12.fontSize}; 
                }
        }
        
    }

`

export const Payment = styled.div`
    display: none;

    width: 320px;
    padding: 0 40px;
    margin: auto;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize}; 

        margin-bottom: 32px;
    }

    > #layout {
        width: 100%;
        border-radius: 8px;
        

        #options-payment {
            display: flex;

            #pix {
                width: 100%;
                height: 80px;
                background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;

                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                border-top-left-radius: 8px;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
                font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize}; 

                svg {
                    font-size: 24px;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }

                &[data-is-true="true"] {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                }
            }

            #credit {
                width: 100%;
                height: 80px;

                background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;

                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                border-top-right-radius: 8px;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
                font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize}; 

                svg {
                    font-size: 24px;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }

                &[data-is-true="true"] {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                }
            }
        }

        > #alternation {
            width: 100%;
            height: 300px;
            padding: 10px 20px;

            display: flex;
            justify-content: center;  
            align-items: center;

            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;

            #qrcode {
                font-size: 166px;
            }
        }
    }

    &[data-open-form-payments="true"] {
        display: block;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG})  {
        display: block;
        width: 100%;
        height: 100%;

        > #layout {
            max-width: 550px;


            #alternation {
                padding: 59px 90px 30px;
                height: 380px;
        
                #qrcode {
                    font-size: 270px;
                }
            }
        }
    }
`