import React, { useState , useEffect} from 'react'
import axios from "axios";
import CardUser from '../CardUser/CardUser';
import "./ListProducts.css" 
import {Link} from "react-router-dom"
import CardDescription from '../CardDescription/CardDescription';



const ListProducts = () => {
    const [products, setProducts] = useState([]);
  
  useEffect(() =>{
    /*axios("/products.json").then((json) => 
    setProducts(json.data.results)
    );*/
    fetch(`${import.meta.env.VITE_APP_BASE_URL}`)
    .then((response) => response.json())
    .then((products) => setProducts(products));
  },[]);
  return (
    <div className='Card-List'>
        {products.map((product) =>{
        return (
        <div style={{margin: 10}} key={product.id}>
            <Link to={`detail/${product.id}`}>
            <CardUser product={product}/>
            </Link>
        </div>)
    })}
    </div>
  )
}

export default ListProducts