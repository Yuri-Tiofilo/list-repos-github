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

  const [pageIndex, setPageIndex] = useState(1)

  const [valueSearch, setValueSearch] = useState('')
  const { repos: data } = useShallowEqualSelector(state => state.home)

  const onClickSearch = useCallback(
    e => {
      e.preventDefault()
      if (valueSearch !== '') {
        dispatch(
          searchRepos({
            term: valueSearch,
            page: pageIndex
          })
        )
      }
    },
    [dispatch, valueSearch]
  )

  const setPageIndexAdd = useCallback(() => {
    dispatch(
      searchRepos({
        term: valueSearch,
        page: pageIndex
      })
    )
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setPageIndex(2)
  }, [dispatch, pageIndex, valueSearch])
  const setPageIndexRemove = useCallback(() => {
    dispatch(
      searchRepos({
        term: valueSearch,
        page: pageIndex
      })
    )
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setPageIndex(prevState => prevState - 1)
  }, [dispatch, pageIndex, valueSearch])

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
      <ListRepos
        repos={data}
        pageIndex={pageIndex}
        onClickNext={() =>
          setPageIndexAdd({
            pagination: true
          })
        }
        onClickPrevious={() =>
          setPageIndexRemove({
            pagination: true
          })
        }
      />
    </Container>
  )
}

export default Home
