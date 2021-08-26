import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi'

export const Container = styled.div`
  margin-top: 60px;
  span {
    color: #3d3d4d;
  }
  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d5d;
      }
      p {
        font-size: 18px;
        color: #3d3d5d;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;

    li {
      & + li {
        margin-left: 60px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #3d3d4d;
      }
    }
  }

  @media screen and (max-width: 980px) {
    header {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      > div {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        p {
          width: 100%;
        }
        p a {
          width: 100%;
          word-break: break-all;
        }
      }
    }
    li {
      & + li {
        margin-left: 15px !important;
      }
      strong {
        display: block;
        font-size: 30px !important;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #3d3d4d;
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 20px;
  flex: 1;
  width: 100%;

  a {
    /* display: block; */
    background: #fff;
    border-radius: 5px;
    flex: 1;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    margin-top: 10px;
    &:hover {
      transform: translateX(20px);
    }
  }
`
export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

export const Infos = styled.div`
  margin-left: 0 16px;
  flex: 1;
`

export const TitleRepo = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media();
`

export const Description = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;
`

export const IconMoreDetails = styled(FiChevronRight).attrs({
  size: 20
})`
  color: #a8a8b3;
`
