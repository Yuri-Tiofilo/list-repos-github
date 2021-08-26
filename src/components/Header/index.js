import React from 'react'

import { Container, LogoImage } from './styles'
import Logo from '~/assets/logo.svg'

function Header() {
  return (
    <Container>
      <a href="/">
        <LogoImage src={Logo} alt="logo" />
      </a>
    </Container>
  )
}

export default Header
