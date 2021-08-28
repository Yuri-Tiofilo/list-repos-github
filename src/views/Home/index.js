import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import useShallowEqualSelector from '~/hooks/useShallowEqualSelector'
import { SearchBar } from './components/SearchBar'
import { ListRepos } from './components/ListRepos'
import { Filters } from './components/Filters'

import { searchRepos, setUrlSearch } from './store/actions'

import { Container, Title } from './styles'

function Home() {
  const dispatch = useDispatch()

  const [pageIndex, setPageIndex] = useState(1)
  const [useFilters, setUseFilters] = useState(false)
  const [valueUrl, setValueUrl] = useState('')
  const [valueSearch, setValueSearch] = useState('')

  const { repos: data, url } = useShallowEqualSelector(state => state.home)
  const onClickSearch = useCallback(
    e => {
      e.preventDefault()
      if (valueSearch !== '') {
        if (!useFilters) {
          dispatch(
            searchRepos({
              term: valueSearch,
              page: pageIndex,
              url: `/search/repositories?q=${valueSearch}&page=${pageIndex}&per_page=6`
            })
          )
        } else {
          const newUrl = `${valueUrl}/${valueSearch}/repos`
          dispatch(
            searchRepos({
              term: valueSearch,
              page: pageIndex,
              url: newUrl
            })
          )
        }
      }
    },
    [dispatch, valueSearch, url, valueUrl, setUrlSearch]
  )

  const handleUseFilters = ({ filter = '' }) => {
    if (filter === 'users') {
      if (valueUrl !== '/users') {
        setUseFilters(true)
        setValueUrl('/users')
      } else {
        setUseFilters(false)
        setValueUrl('')
      }
    } else if (filter === 'orgs') {
      if (valueUrl !== '/orgs') {
        setUseFilters(true)
        setValueUrl('/orgs')
      } else {
        setUseFilters(false)
        setValueUrl('')
      }
    } else if (filter === 'clean') {
      setUseFilters(false)
      setValueUrl('')
    }
  }

  console.log(valueUrl)

  const setPageIndexAdd = useCallback(() => {
    setPageIndex(pageIndex + 1)
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
  }, [dispatch, pageIndex])

  const setPageIndexRemove = useCallback(() => {
    setPageIndex(prevState => prevState - 1)
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
  }, [dispatch, pageIndex])

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
      <Filters
        onClickFilter={param => {
          handleUseFilters({
            filter: param
          })
        }}
        useFilter={useFilters}
      />

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
