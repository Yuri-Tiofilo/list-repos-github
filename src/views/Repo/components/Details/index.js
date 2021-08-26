import React from 'react'

import {
  Container,
  Issues,
  TitleRepo,
  Description,
  IconMoreDetails,
  Infos
} from './styles'

function Details({ repository, issues }) {
  return (
    <Container>
      <header>
        <img src={repository?.owner.avatar_url} />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
          <p>
            Link repositório: <a href={`${repository.url}`}>{repository.url}</a>
          </p>
        </div>
      </header>
      <ul>
        <li>
          <strong>{repository.stargazers_count}</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>{repository.forks_count}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{repository.open_issues_count}</strong>
          <span>Issues abertas</span>
        </li>

        <li>
          <strong>{repository.language}</strong>
          <span>Linguagem</span>
        </li>
      </ul>

      <div style={{ marginTop: 20 }}>
        <span>Algumas issues abertas:</span>

        <Issues>
          {issues.map(issue => (
            <a key={issue.id} href={issue.html_url}>
              <Infos>
                <TitleRepo>{issue.title}</TitleRepo>
                <Description>{issue.user.login}</Description>
              </Infos>
              <IconMoreDetails />
            </a>
          ))}
        </Issues>
      </div>
    </Container>
  )
}

export { Details }
