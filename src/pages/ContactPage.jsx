import React from 'react';
import { useNavigate } from "react-router-dom";


const ContactPage = () => {
    const navigate = useNavigate();
  return (
    <div style={{display:"inlineFlex", justifyContent:"center", margin:20}}>
        <h1>Contacto</h1>
        <button onClick={()=> navigate("/")}>Ir a la pagina de Inicio</button>
    </div>
    
  )
}

export default ContactPage