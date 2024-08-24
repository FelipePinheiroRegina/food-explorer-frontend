import styled from "styled-components";
import fruits from "../../assets/fruits.png"

export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    

    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas:
        "top"
        "content"
        "foot";

`;

export const Content = styled.div`
    margin-top: 120px;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.MD}) {
        margin-top: 250px;
    }
`;

export const ContainerImage = styled.div`
    width: 100%;
    height: 150px;
    margin: auto;
    position: relative;
    display: flex;
    align-items: end;
    
    > .background-linear {
        position: absolute;
        bottom: 0;
        right: 0;
        
        width: 80%;
        height: 90px;
        
        z-index: -1;
        
        background-image: linear-gradient(to left, #091E26, #00131C);
    }
   
    > .text {
        text-align: left;
        z-index: 1;
       

        h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            font-family: ${({ theme }) => theme.FONTS.POPPINS.SEMIBOLD.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.POPPINS.SEMIBOLD.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.POPPINS.SEMIBOLD.fontSize};
        }

        p {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            font-family: ${({ theme }) => theme.FONTS.POPPINS.REGULAR_12.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.POPPINS.REGULAR_12.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.POPPINS.REGULAR_12.fontSize};

            padding-bottom: 5px;
        }
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.MD}) {
        height: 260px;

        > .background-linear {
            width: 80%;
            height: 210px;
        }

        > .text {
            display: flex;
            flex-direction: column;
            
            padding-bottom: 50px;

            h1 {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500.fontWeight};
                font-size:   ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500.fontSize};
            }

            p {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
                font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        height: 260px;
       
        > .background-linear {
            position: absolute;
            bottom: 0;
            left: 50%;

            width: 65%;
            
            transform: translateX(-50%);
        }    

    
        > .text {
            max-width: 33%;
            display: flex;
            flex-direction: column;
           
            place-content: center;
            align-items: center;

            h1 {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500.fontWeight};
                font-size:   ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_500.fontSize};
            }

            p {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
                font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};
            }
        }
    }

    margin-bottom: 62px;
`;

export const ImageOverlay = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;

    background-image: url(${fruits});
    background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.MD}) {
        width: 50%;
        height: 120%;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        width: 50%; 
        height: 120%;  
    }
`

export const ContainerAllDishes = styled.div`
    width: 100%;
    max-width: 320px;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.XSS}) {
        max-width: 350px;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.SS}) {
        max-width: 375px;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.SM}) {
        max-width: 425px;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.MD}) {
        max-width: 768px;
    }

    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h2 {
        padding-left: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_18.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_18.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_18.fontSize};
    }
    
    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        max-width: 1000px;

        h2 {
            font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize};
        }

    }
`

export const ContainerScroll = styled.div`
    position: relative;
    width: 100%;
    
    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        margin-bottom: 48px;
    }
`

export const ArrowLeft = styled.div`
    display: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        
        display: flex;
        align-items: center;
        background-image: linear-gradient(to right, ${({ theme }) => theme.COLORS.DARK_300}, transparent);
        width: 200px;
        height: 100%;

        padding-left: 19px;

        > svg {
            font-size: 40px;
            cursor: pointer;
        }
    }
`

export const ContainerHidden = styled.div`
    display: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        display: block;
    } 
`

export const Main = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    
    gap: 16px;
    
    overflow-x: scroll;
    scroll-behavior: smooth;

    > * {
        flex: 0 0 210px; 
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        gap: 27px; 
        
        > * {
            flex: 0 0 300px;  
        }
    }
`

export const ArrowRight = styled.div`
    display: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-image: linear-gradient(to left, ${({ theme }) => theme.COLORS.DARK_300}, transparent);
        width: 200px;
        height: 100%;

        padding-right: 19px;

        > svg {
            font-size: 40px;
            cursor: pointer;
        }
    }
`