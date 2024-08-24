import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 1fr max-content;
    grid-template-areas:
    "content"
    "foot"
    ;

   justify-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    grid-area: content;
    width: 35.0rem;
    padding: 20px;
    margin-top: 150px;

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize};
    }     

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG }) {  
        width: 80%;
    }      
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;

    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        strong {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};
        }
    }
    
    > .container-group {
        display: flex;
        flex-direction: column;
        gap: 24px;

        label.label-image {

            .container-image {
                position: relative;
                width: 100%;
                height: 4.8rem;
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
                border-radius: 5px;
                display: flex;
                align-items: center;
                padding-left: 32px;
                cursor: pointer;

                span {
                    svg {
                        color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
                        font-size: 24px;
                    }

                    color: ${({ theme }) =>  theme.COLORS.LIGHT_100};

                    &[data-havecontent="true"] {
                        color: ${({ theme }) =>  theme.COLORS.CARROT_100};
                    }

                    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
                    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
                    font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 8px;

                    &[data-="true"] {
                        transform: translateX(0);
                    }
                }

                input {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    opacity: 0;
                    visibility: hidden;
                }
            }  
        }

        .container-group-ingredients {
            width: 100%;
            

            display: grid;
            grid-template-columns: repeat(2, auto);
            flex-direction: row;
            align-items: center;
            gap: 16px;

            padding: 8px;

            flex-wrap: wrap;
            border-radius: 5px;
           

            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG }) {
        

        label {
            width: 100%;
        }
        
        > .container-group {
            flex-direction: row;

            .price {
                width: max-content;
            }

            .container-group-ingredients {
                grid-template-columns: repeat(5, auto);
            }
        }

        > .container-save {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    } 
`