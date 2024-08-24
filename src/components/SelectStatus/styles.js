import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectBox = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 5px;
  padding: 10px;
  cursor: ${({ $isAdmin }) => $isAdmin ? 'pointer' : 'default'};
  display: flex;
  justify-content: space-between;

  > .box-inline {
    display: flex;
    align-items: center;
    gap: 8px;

    > .Pending {
        color: ${({ theme }) => theme.COLORS.TINTS_300};
    }

    > .Preparing {
        color: ${({ theme }) => theme.COLORS.CARROT_100};
    }

    > .Delivered {
        color: ${({ theme }) => theme.COLORS.MINT_100};
    }

  } 
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  z-index: 10;
  display: ${props => (props.open ? 'block' : 'none')};
`;

export const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
  
  > .Pending {
        color: ${({ theme }) => theme.COLORS.TINTS_300};
    }

    > .Preparing {
        color: ${({ theme }) => theme.COLORS.CARROT_100};
    }

    > .Delivered {
        color: ${({ theme }) => theme.COLORS.MINT_100};
    }
`;