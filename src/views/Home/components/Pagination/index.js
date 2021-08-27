import React from 'react'

import { Container, ButtonNext, ButtonPrevious } from './styles'

function Pagination({ onClickPrevious, onClickNext, pageIndex }) {
  return (
    <Container>
      <ButtonPrevious
        disabled={pageIndex === 1}
        onClick={() => onClickPrevious()}
      >
        Anterior
      </ButtonPrevious>
      <ButtonNext onClick={() => onClickNext()}>Próximo</ButtonNext>
    </Container>
  )
}

export { Pagination }
