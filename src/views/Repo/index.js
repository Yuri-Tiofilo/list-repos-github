import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import useShallowEqualSelector from '~/hooks/useShallowEqualSelector'

import { searchRepoInfos, searchRepoIssues } from './store/actions'

import { ButtonBack } from './components/ButtonBack'
import { Details } from './components/Details'

import { Container } from './styles'

function Repo() {
  const { params } = useRouteMatch()

  const dispatch = useDispatch()

  const { repo, issues } = useShallowEqualSelector(state => state.details)

  useEffect(() => {
    dispatch(
      searchRepoInfos({
        name: params.name,
        owner: params.owner
      })
    )
    dispatch(
      searchRepoIssues({
        name: params.name,
        owner: params.owner
      })
    )
  }, [dispatch])

  return (
    <Container>
      <ButtonBack text="Voltar" to="/" />
      {repo !== null ? <Details repository={repo} issues={issues} /> : null}
    </Container>
  )
}

export default Repo
