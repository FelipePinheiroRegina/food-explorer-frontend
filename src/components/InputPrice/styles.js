import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme, $isBg800 }) =>  $isBg800 ? theme.COLORS.DARK_800 : theme.COLORS.DARK_800};
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 4.8rem;
    max-height: 4.8rem;
    width: 100%;
    border: none;
    border-radius: .5rem;
    flex: 1;
    gap: ${({ $isFile }) => $isFile ? '8px' : '0'};

    cursor: pointer;

    svg {
        color: ${({ $isFile, theme }) => $isFile ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_500};
        margin-left: 1.4rem;
    }

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100.fontSize};
    }

    input {
        width: ${({ $isFile }) => $isFile ? '1px' : '100%'};
        opacity: ${({ $isFile }) => $isFile ? '0' : '1'};
        visibility: ${({ $isFile }) => $isFile ? 'hidden' : 'visible'};
        height: 4.8rem;
        
        background-color: ${({ theme, $isBg800 }) =>  $isBg800 ? theme.COLORS.DARK_800 : theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};

        margin-left: 1.4rem;
        border: none;
        outline: none;
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`