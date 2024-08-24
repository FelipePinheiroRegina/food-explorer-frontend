import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: -100%;
    transform: translate(-100%, -50%);
    z-index: 50;


    background-color: ${({ theme }) => theme.COLORS.TINTS_400};
    width: 300px;
    height: 100px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px 10px;

    box-shadow: 1px 2px 2px 5px ${({ theme }) => theme.COLORS.TINTS_400};

    svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        cursor: pointer;
    }

    svg:hover {
        transform: scale(1.2);
    }
    
    strong {
        width: 100%;
        margin-top: 15px;
        text-align: center;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_14.fontSize};
    }

    transition: .3s ease-in-out;

    &[data-error-is-open="true"] {
        left: 50%;
        transform: translate(-50%, -50%);
    }
`