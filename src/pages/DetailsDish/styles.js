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
`

export const Content = styled.div`
    grid-area: content;
    width: 100%;
    height: 100%;
    max-width: 320px;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-top: 150px;
        
    .go-back {
        font-size: 2.4rem;
    }

    svg:nth-child(1) {
        font-size: 2.4rem;
        cursor: pointer;
    }

    > .container-details-and-image {
        display: flex;
        flex-direction: column;
        gap: 16px;

        img {
            width: 264px;
            height: 264px;
            margin: auto;
        }

        .container-wrap {
            display: flex;
            flex-direction: column;
            gap: 48px;
            
            .details-dish {
                display: flex;
                flex-direction: column;
                gap: 24px;
                

                text-align: center;

                h1 {
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
            
                    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
                    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
                    font-size: 2.7rem;
                }

                p {
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
            
                    font-family: ${({ theme }) => theme.FONTS.POPPINS.REGULAR_12.fontFamily};
                    font-weight: ${({ theme }) => theme.FONTS.POPPINS.REGULAR_12.fontWeight};
                    font-size: 1.6rem;
                }

                .container-ingredients {
                    width: 100%;
                    display: flex;
                    gap: 24px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
            }

            .add-or-update {
                .container-add {
                    display: flex;
                    justify-content: center;
                    column-gap: 16px;
                }

                .container-update {
                    width: 100%;
                }
            }
        }
    }
    

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG }) {  
        max-width: 80%;         
        gap: 42px;


        > .container-details-and-image {
            flex-direction: row;
            align-items: center;
            gap: 47px;
        
            img {
                width: 389px;
                height: 389px;
                margin: 0;
            }

            > .container-wrap {
                display: flex;
                flex-direction: column;
                gap: 48px;
                
                .details-dish {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    
                    text-align: left;

                    h1 {
                        font-size: 4.0rem;
                    }

                    p {
                        font-size: 2.4rem;
                    }

                    .container-ingredients {
                        justify-content: flex-start;
                        gap: 12px;
                    }
                }

                .add-or-update {
                    .container-add {
                        display: flex;
                        justify-content: flex-start;
                        column-gap: 16px; 
                    }

                    .container-update {
                        width: max-content;
                    }
                }
            }
        }

        margin-bottom: 100px;
    }
`