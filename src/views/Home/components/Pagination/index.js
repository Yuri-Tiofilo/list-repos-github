import React from 'react'

import { Container, ButtonNext, ButtonPrevious } from './styles'

function Pagination() {
  return (
    <Container>
      <ButtonPrevious>Anterior</ButtonPrevious>
      <ButtonNext>Próximo</ButtonNext>
    </Container>
  )
}

export { Pagination }
