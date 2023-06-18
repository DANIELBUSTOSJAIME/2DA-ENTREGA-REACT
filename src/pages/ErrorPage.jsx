import React from 'react'

const ErrorPage = () => {
  return (
    <div style={{display:"inlineFlex", justifyContent:"center", margin:20}}>
      <h1>Error Page Not Found</h1>
      <br />
      <button onClick={()=> navigate("/")}>Ir a la pagina de Inicio</button>
    </div>
  )
}

export default ErrorPage