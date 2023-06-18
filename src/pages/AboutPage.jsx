import React from 'react';
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();
  return (
    <div style={{display:"inlineFlex", justifyContent:"center", margin:20}}>
        <h1>Nosotros</h1>
        <button onClick={()=> navigate("/")}>Ir a la pagina de Inicio</button>
    </div>
  )
}

export default AboutPage