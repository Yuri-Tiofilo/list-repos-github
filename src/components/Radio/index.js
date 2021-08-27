import React from 'react'

import { Container } from './styles'

function Radio({
  style,
  active,
  light,
  background,
  check,
  children,
  inputStyle,
  borderColor,
  checkedColor,
  labelStyle,
  ...props
}) {
  return (
    <Container
      style={style}
      light={light}
      background={background}
      borderColor={borderColor}
      checkedColor={checkedColor}
      check={check}
      disabled={props.disabled}
      defaultChecked={props.defaultChecked}
    >
      <input type="radio" {...props} style={inputStyle} />
      {children ? (
        <label htmlFor={props.id} style={labelStyle}>
          {children}
        </label>
      ) : null}
    </Container>
  )
}

export default Radio
