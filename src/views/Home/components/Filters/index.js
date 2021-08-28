import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { setUrlSearch } from '../../store/actions'

import { Radio } from '~/components'

import { Container, ButtonClose, IconClose } from './styles'

function Filters({ onClickFilter, useFilter }) {
  // const dispatch = useDispatch()

  // const [valueUrl, setValueUrl] = useState('/')
  const [filterUser, setFilterUser] = useState(false)
  const [filterLanguage, setFilterLanguage] = useState(false)
  const [filterOrganization, setFilterOrganization] = useState(false)

  useEffect(() => {
    if (!useFilter) {
      setFilterUser(false)
      setFilterLanguage(false)
      setFilterOrganization(false)
    }
  }, [useFilter])

  return (
    <Container>
      <Radio
        label="Por usuário"
        check={filterUser}
        onClick={() => {
          setFilterUser(!filterUser)
          setFilterLanguage(false)
          setFilterOrganization(false)
          onClickFilter('users')
        }}
      />
      <Radio
        label="Por Linguagem"
        check={filterLanguage}
        onClick={() => {
          setFilterUser(false)
          setFilterLanguage(!filterLanguage)
          setFilterOrganization(false)
          onClickFilter('language')
        }}
      />
      <Radio
        label="Por organização"
        check={filterOrganization}
        onClick={() => {
          setFilterUser(false)
          setFilterLanguage(false)
          setFilterOrganization(!filterOrganization)
          onClickFilter('orgs')
        }}
      />

      {useFilter ? (
        <ButtonClose
          onClick={() => {
            onClickFilter('clean')
          }}
        >
          <IconClose />
          <strong>Limpar filtro</strong>
        </ButtonClose>
      ) : null}
    </Container>
  )
}

export { Filters }
