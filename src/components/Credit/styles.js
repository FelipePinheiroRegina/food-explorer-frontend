import styled from "styled-components"

export const Container = styled.form`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 37px;

    label {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    input {
        width: 100%;
       
        padding: 16px 14px;

        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    strong {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize}; 
    }

    #inputs-inline {
        display: flex;
        gap: 6px;
    }
`