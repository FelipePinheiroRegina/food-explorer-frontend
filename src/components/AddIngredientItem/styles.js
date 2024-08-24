import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    

    padding: 10px 16px;
    border-radius: 8px;
    
    background-color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.TRANSPARENT : theme.COLORS.LIGHT_600};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, $isNew}) => $isNew ? `1px dashed
    ${theme.COLORS.LIGHT_500} ` : 'none'};

    > input {
        width: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
        border: none;
        outline: none;

        &::placeholder {
        
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > button {
        border: none;
        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
        cursor: pointer;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

   
`