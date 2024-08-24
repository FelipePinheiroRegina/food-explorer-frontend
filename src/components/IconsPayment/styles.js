import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    svg {
        font-size: 96px;
        color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    p {
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_600};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_20.fontSize}; 
    }
`