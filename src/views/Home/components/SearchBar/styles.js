import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  margin-top: 30px;
  max-width: 700px;
`

export const Input = styled.input`
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #eee;
  border-right: 0;

  &::placeholder {
    color: #a8a8b3;
  }
`

export const Button = styled.button`
  width: 210px;
  height: 70px;
  background: #04d361;
  border: 0;
  color: #fff;
  font-weight: bold;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`
