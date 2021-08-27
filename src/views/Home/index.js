import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import useShallowEqualSelector from '~/hooks/useShallowEqualSelector'
import { SearchBar } from './components/SearchBar'
import { ListRepos } from './components/ListRepos'
// import { Filters } from './components/Filters'

import { searchRepos, setUrlSearch } from './store/actions'

import { Container, Title } from './styles'

function Home() {
  const dispatch = useDispatch()

  const [pageIndex, setPageIndex] = useState(1)
  const [valueUrl, setValueUrl] = useState('')

  const [valueSearch, setValueSearch] = useState('')
  const { repos: data, url } = useShallowEqualSelector(state => state.home)
  const onClickSearch = useCallback(
    e => {
      e.preventDefault()
      setValueUrl(url)
      // console.log(url)
      // if (url === '') {
      //   dispatch(
      //     setUrlSearch({
      //       url: `/search/repositories?q=${valueSearch}&page=${pageIndex}&per_page=6`
      //     })
      //   )
      // } else {
      //   dispatch(
      //     setUrlSearch({
      //       url: `${url}/${valueSearch}/repos`
      //     })
      //   )
      // }
      // console.log(url)
      if (valueSearch !== '') {
        dispatch(
          searchRepos({
            term: valueSearch,
            page: pageIndex,
            url: `/search/repositories?q=${valueSearch}&page=${pageIndex}&per_page=6`
          })
        )
      }
    },
    [dispatch, valueSearch, url, valueUrl, setUrlSearch]
  )

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
      {/* <Filters /> */}
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
