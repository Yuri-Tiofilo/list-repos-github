import React from 'react'

import {
  LinkPage,
  Avatar,
  Description,
  IconMoreDetails,
  TitleRepo,
  Infos
} from './styles'

function CardRepo({ to, title, description, image_repository_owner }) {
  return (
    <LinkPage href={to}>
      <Avatar src={image_repository_owner} />
      <Infos>
        <TitleRepo>{title}</TitleRepo>
        <Description>{description}</Description>
      </Infos>
      <IconMoreDetails />
    </LinkPage>
  )
}

export { CardRepo }
