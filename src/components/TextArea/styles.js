import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    height: 172px;
    padding: 14px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    outline: none;
    border-radius: 8px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`