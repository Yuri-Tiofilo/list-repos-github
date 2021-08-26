import React from 'react'

import useShallowEqualSelector from '~/hooks/useShallowEqualSelector'

import { Container } from './styles'

function Home() {
  const { movies } = useShallowEqualSelector(state => state.home)
  console.log(movies)
  return <Container>teste</Container>
}

export default Home
