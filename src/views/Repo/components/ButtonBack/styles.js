import styled from 'styled-components'

import { FiChevronsLeft } from 'react-icons/fi'
export const Container = styled.a`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-weight: 500;
  font-size: 18px;
`

export const IconBack = styled(FiChevronsLeft).attrs({
  size: 25
})``
