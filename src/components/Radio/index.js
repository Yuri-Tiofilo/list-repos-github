import React from 'react'

import { Container, IconCheck, IconNoCheck, Text } from './styles'

function Radio({ label, check, onClick }) {
  return (
    <Container onClick={onClick}>
      {check ? <IconCheck /> : <IconNoCheck />}

      <Text>{label}</Text>
    </Container>
  )
}

export default Radio
