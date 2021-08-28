import React from 'react'

import Image from '~/assets/badRequest.png'

import { CardRepo } from '../CardRepo'
import { Pagination } from '../Pagination'

import { Container, ContainerNoRepo, TitleNoRepo, ImageNoRepo } from './styles'

function ListRepos({
  repos,
  pageSize,
  pageIndex,
  onClickNext,
  onClickPrevious
}) {
  return (
    <>
      {repos?.length !== 0 ? (
        <>
          <Container>
            {repos.map(repo => (
              <CardRepo
                key={repo.id}
                to={`/repository/${repo.name}/${repo?.owner.login}`}
                description={repo?.description}
                title={repo?.name}
                image_repository_owner={repo?.owner.avatar_url}
              />
            ))}
          </Container>

          <Pagination
            pageIndex={pageIndex}
            onClickNext={() => onClickNext()}
            onClickPrevious={() => onClickPrevious()}
          />
        </>
      ) : (
        <ContainerNoRepo>
          <ImageNoRepo src={Image} width={60} height={60} />
          <TitleNoRepo>Não possui Repositórios</TitleNoRepo>
          <span>Faça uma busca acima para obter resultados</span>
        </ContainerNoRepo>
      )}
    </>
  )
}

export { ListRepos }
