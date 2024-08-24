import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas:
    "top"
    "content"
    "foot"
    ;
`

export const Content = styled.div`
    grid-area: content;
    width: 320px;
    margin: auto;
    margin-top: 156px;
    margin-bottom: 100px;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        width: 1000px;
    }
`
export const LayoutHistoryMobile = styled.div`
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-top: 20px;

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize};

    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}){
        display: none;
    }
`
export const CardOrder = styled.div`
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 24px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontWeight};
    font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontSize};
    
    > .container-inline {
        display: flex;
        gap: 10px;
    }

    > #status {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontSize};

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        border: none;
        padding: 13px 16px;
        outline: none;
        border-radius: 5px;
    }
`

export const LayoutHistoryDesktop = styled.div`
    display: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
        display: flex;
        flex-direction: column;
        gap: 34px;
        margin-top: 20px;
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize};

    }

    table {
        width: 100%;
        text-align: left;
        border-collapse: separate;
        border-spacing: 0;
       
        > thead {
            
            th {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontFamily};
                font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontWeight};
                font-size:   ${({ theme })   => theme.FONTS.ROBOTO.BOLD_14.fontSize};

                height: 64px;
            }

            .status {
                min-width: 200px;
                border-top-left-radius: 8px;
            }

            .date {
                border-top-right-radius: 8px;
            }
        }

        td, th {
            border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
            padding: 8px 24px;
        }

        td {
            height: 80px;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontFamily};
            font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontWeight};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_14.fontSize};
        }
    }

`