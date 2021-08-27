import React, { useState } from 'react'

import { Radio } from '~/components'

// import { Container } from './styles';

function Filters() {
  const [teste, setTeste] = useState(false)
  return (
    <div>
      <Radio
        active={teste}
        check={() => {
          setTeste(!teste)
        }}
      >
        teste
      </Radio>
      <Radio active={true}>teste</Radio>
      <Radio active={true}>teste</Radio>
    </div>
  )
}

export { Filters }
