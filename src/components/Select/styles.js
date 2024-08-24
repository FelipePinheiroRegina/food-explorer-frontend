import styled from "styled-components"

export const Container = styled.select`
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
    font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};

    height: 4.8rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding-left: 16px;
    outline: none;

    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;

    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right 10px top 50%;

`