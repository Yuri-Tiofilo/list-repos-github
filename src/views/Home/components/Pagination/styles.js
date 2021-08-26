import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`
const cssButton = css`
  border: 0;
  color: var(--black);
  background-color: transparent;
  padding: 10px 30px;
  border-radius: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ButtonNext = styled.button`
  ${cssButton}
  background: #04d361;
  border: 0;
  margin-left: 10px;
`
export const ButtonPrevious = styled.button`
  ${cssButton}
`
