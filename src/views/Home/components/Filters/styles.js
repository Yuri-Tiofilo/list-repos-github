import styled from 'styled-components'

import { FiXCircle } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
  margin-top: 8px;

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
`

export const IconClose = styled(FiXCircle).attrs({
  size: 20
})`
  color: #3a3a3a;
`

export const ButtonClose = styled.button`
  display: flex;
  border: 0;

  align-items: center;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 980px) {
    margin-top: 10px;
    margin-left: 0px;
  }

  strong {
    margin-left: 5px;
    color: #3a3a3a;
  }
`
