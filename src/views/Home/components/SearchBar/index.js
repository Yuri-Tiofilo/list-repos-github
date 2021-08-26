import React from 'react'

import { Container, Input, Button } from './styles'

function SearchBar({ value, placeholder, onChange, type, onClick }) {
  return (
    <Container onSubmit={onClick}>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button type={type} onClick={onClick}>
        Pesquisar
      </Button>
    </Container>
  )
}

export { SearchBar }
