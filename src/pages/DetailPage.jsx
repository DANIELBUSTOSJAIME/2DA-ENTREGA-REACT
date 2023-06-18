import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import CardUser from '../components/CardUser/CardUser';
import CardDescription from '../components/CardDescription/CardDescription';


const DetailPage = () => {
    const [product, setProduct] = useState({})
    let { id } = useParams();

    console.log(id);

    useEffect(() =>{
        /*axios("/products.json").then((json) => 
        setProduct(json.data)
        );*/
        fetch(`${import.meta.env.VITE_APP_BASE_URL}/${id}`)
        .then((response) => response.json())
        .then((product) => setProduct(product));
      },[id]);
  return (
    <div style={{display:"inlineFlex", justifyContent:"center", margin:20}}>
        <h1>Detalle del Producto</h1>
        {product.id ? <CardDescription product={product}/> : null}
        
    </div>
  )
}

export default DetailPage