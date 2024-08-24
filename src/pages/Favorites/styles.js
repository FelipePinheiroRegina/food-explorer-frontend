import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    

    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas:
        "top"
        "main"
        "foot";

`;

export const Main = styled.div`
    display: grid;
    grid-template-rows: max-content max-content auto;

    margin-top: 156px;
    margin-left: 35px;

    grid-area: main;
    gap: 27px;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize};
    }

    > #struct-dishes {
        display: grid;
        grid-template-columns: 230px;
        gap: 16px;

        .dishes {
            display: flex;
            align-items: center;
            gap: 13px;

            img {
                width: 72px;
                height: 72px;
            }

            .details {
                h2 {
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};

                    font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200.fontFamily};
                    font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200.fontWeight};
                    font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_200.fontSize};

                    white-space: nowrap;
                }
            }
        }
    }
   
    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}){
        max-width: 1000px;
        margin-left: 123px;

        > #struct-dishes { 
            grid-template-columns: repeat(4, 1fr);
            align-self: flex-start;
            flex-wrap: wrap;
        }
    }
`