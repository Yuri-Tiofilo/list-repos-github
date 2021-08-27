import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUrlSearch } from '../../store/actions'

import { Radio } from '~/components'

import { Container } from './styles'

function Filters() {
  const dispatch = useDispatch()

  const [valueUrl, setValueUrl] = useState('/')
  const [filterUser, setFilterUser] = useState(false)
  const [filterLanguage, setFilterLanguage] = useState(false)
  const [filterOrganization, setFilterOrganization] = useState(false)
  const handleFilterUser = () => {
    setFilterUser(!filterUser)
    setFilterLanguage(false)
    setFilterOrganization(false)

    if (filterUser) {
      setValueUrl('/users')
    } else {
      setValueUrl('/')
    }
    dispatch(
      setUrlSearch({
        url: valueUrl
      })
    )
  }

  const handleFilterLanguage = () => {
    setFilterUser(false)
    setFilterLanguage(!filterLanguage)
    setFilterOrganization(false)

    if (filterLanguage) {
      setValueUrl('/language')
    } else {
      setValueUrl('/')
    }

    dispatch(
      setUrlSearch({
        url: valueUrl
      })
    )
  }

  const handleFilterOrganization = () => {
    setFilterUser(false)
    setFilterLanguage(false)
    setFilterOrganization(!filterOrganization)

    if (filterOrganization) {
      setValueUrl('/orgs')
    } else {
      setValueUrl('/')
    }

    dispatch(
      setUrlSearch({
        url: valueUrl
      })
    )
  }

  return (
    <Container>
      <Radio
        label="Por usuário"
        check={filterUser}
        onClick={() => {
          handleFilterUser()
        }}
      />
      <Radio
        label="Por Linguagem"
        check={filterLanguage}
        onClick={() => {
          handleFilterLanguage()
        }}
      />
      <Radio
        label="Por organização"
        check={filterOrganization}
        onClick={() => {
          handleFilterOrganization()
        }}
      />
    </Container>
  )
}

export { Filters }
