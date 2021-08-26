import React from 'react'

const Forbidden = () => {
  return (
    <div>
      <div>
        <h1 className="mt-5" style={{ textAlign: 'center' }}>
          Permissão Negada
        </h1>
        <h2 className="mt-3" style={{ textAlign: 'center' }}>
          Você não possui permissão para executar essa ação ou acessar esse
          recurso
        </h2>
      </div>
    </div>
  )
}

export default Forbidden
