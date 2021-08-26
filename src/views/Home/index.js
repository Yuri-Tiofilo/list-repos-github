import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import useShallowEqualSelector from '~/hooks/useShallowEqualSelector'
import { SearchBar } from './components/SearchBar'
import { ListRepos } from './components/ListRepos'
import { Filters } from './components/Filters'

import { searchRepos } from './store/actions'

import { Container, Title } from './styles'

function Home() {
  const dispatch = useDispatch()

  const [valueSearch, setValueSearch] = useState('')
  const { repos: data } = useShallowEqualSelector(state => state.home)

  const onClickSearch = useCallback(
    e => {
      e.preventDefault()
      if (valueSearch !== '') {
        dispatch(
          searchRepos({
            term: valueSearch
          })
        )
      }
    },
    [dispatch, valueSearch]
  )

  return (
    <Container>
      <Title>Explore repositorios no GitHub</Title>
      <SearchBar
        placeholder="Pesquisar"
        value={valueSearch}
        onChange={text => {
          setValueSearch(text.target.value)
        }}
        onClick={onClickSearch}
      />
      <Filters />
      <ListRepos repos={data} />
    </Container>
  )
}

export default Home
