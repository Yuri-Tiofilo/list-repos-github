import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi'

export const Container = styled.div``

export const LinkPage = styled.a`
  display: block;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  text-decoration: none;

  display: flex;
  align-items: center;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(20px);
  }

  svg {
    margin-left: auto;
  }
`

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

export const TitleRepo = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`

export const Description = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`
export const IconMoreDetails = styled(FiChevronRight).attrs({
  size: 20
})`
  color: #a8a8b3;
`

export const Infos = styled.div`
  margin-left: 20px;
  flex: 1;
`
