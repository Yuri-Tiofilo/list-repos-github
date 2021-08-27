import styled from 'styled-components'

import { FiCircle, FiCheckCircle } from 'react-icons/fi'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  align-items: center;

  > label {
    margin-left: 10px;
    font-size: 16px;
    line-height: 21px;
  }

  > input {
    position: relative;
    cursor: pointer;

    width: 30px;
    height: 30px;
  }

  > input:before {
    content: '';
    display: block;
    position: absolute;

    top: 0;
    left: 0;

    width: 30px;
    height: 30px;

    ${({ light, background }) =>
      light
        ? `
          background-color: ${background || '#f67'};
          `
        : `
          background-color: ${background || '#fff'};
          `}
  }

  > input:after {
    content: '';
    display: block;
    position: absolute;
    overflow: hidden;

    top: 0;
    left: 0;

    width: 30px;
    height: 30px;

    flex-shrink: 0;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 5px solid;
    border-radius: 50px;

    ${({ light, background }) =>
      light
        ? `
          border-color: ${'#fff'};
          background-color: ${background || '#f67'};
          `
        : `
          border-color: ${'#f67'};
          background-color: ${background || '#fff'};
          `}

    ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  }

  > input:hover:after,
  > input:focus:after,
  &.active input {
    ${({ dark, disabled }) =>
      dark
        ? 'border-color: #707070;'
        : `border-color: ${disabled ? '#f76' : '#f65'};`}

    ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  }

  > input:checked:after {
    border: none;
    ${({ check, light }) =>
      check
        ? `
          background-image: url(${FiCheckCircle});
          `
        : light
        ? `
          background-image: url(${FiCircle});
          `
        : `
          background-image: url(${FiCircle});
          `}
    background-repeat: no-repeat;
    background-size: 30px 30px;

    ${({ checkedColor }) =>
      checkedColor &&
      `
      border: 5px solid;
      border-radius: 50px;
      background-image: none;
      border-color: ${checkedColor};
      background-color: ${checkedColor};
      `}
  }

  > input::-ms-check {
    border: 5px solid;
    border-radius: 50px;
    flex-shrink: 0;

    color: transparent;

    ${({ light }) =>
      light
        ? `
          border-color: #fff;
          `
        : `
          border-color: #707070;
          `}
  }

  > input:hover::-ms-check,
  > input:focus::-ms-check,
  &.active input::-ms-check {
    ${({ dark }) =>
      dark
        ? `
          border-color: #707070;
          `
        : `
          border-color: #f65;
          `}
  }

  > input:checked::-ms-check {
    border: none;
    ${({ light }) =>
      light
        ? `
          border-color: #fff;
          background-image: url(${FiCircle});
          `
        : `
          border-color: #f76;
          background-image: url(${FiCircle});
          `}
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: -5px;
  }
`
