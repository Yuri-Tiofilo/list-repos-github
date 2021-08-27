import styled from 'styled-components'

import { FiCircle, FiCheckCircle } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 980px) {
    margin-top: 10px;
    margin-left: 0px;
  }
`

export const IconCheck = styled(FiCheckCircle).attrs({
  size: 20
})`
  color: #3a3a3a;
`

export const IconNoCheck = styled(FiCircle).attrs({
  size: 20
})`
  color: #3a3a3a;
`

export const Text = styled.strong`
  margin-left: 5px;
  color: #3a3a3a;
`
