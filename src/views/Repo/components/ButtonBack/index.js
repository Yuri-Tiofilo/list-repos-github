import React from 'react'

import { Container, IconBack } from './styles'

function ButtonBack({ text, to }) {
  return (
    <Container href={to}>
      <IconBack />
      {text}
    </Container>
  )
}

export { ButtonBack }
