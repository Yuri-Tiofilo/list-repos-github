import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 8px;

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
`
