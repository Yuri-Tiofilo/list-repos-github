import React, { useState } from 'react'

import { Radio } from '~/components'

import { Container } from './styles'

function Filters() {
  const [filterUser, setFilterUser] = useState(false)
  const [filterLanguage, setFilterLanguage] = useState(false)
  const [filterOrganization, setFilterOrganization] = useState(false)

  const handleFilterUser = () => {
    setFilterUser(!filterUser)
    setFilterLanguage(false)
    setFilterOrganization(false)
  }

  const handleFilterLanguage = () => {
    setFilterUser(false)
    setFilterLanguage(!filterLanguage)
    setFilterOrganization(false)
  }

  const handleFilterOrganization = () => {
    setFilterUser(false)
    setFilterLanguage(false)
    setFilterOrganization(!filterOrganization)
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
