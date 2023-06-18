import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardUser from '../CardUser/CardUser';

const Category = () => {
    
    
    const [products, setProducts] = useState([])
    let { categoryId } = useParams();
    let filteredCategory = products.filter((product) => {
        return product.category === categoryId;
    });

    useEffect(() =>{
        /*axios("/products.json").then((json) => 
        setProduct(json.data)
        );*/
        fetch(`${import.meta.env.VITE_APP_BASE_URL}/`)
        .then((response) => response.json())
        .then((products) => setProducts(products));
      },[]);
  return (
    <div className='Card-List'>
        {filteredCategory.map((product) =>{
        return (
        <div style={{margin: 10}} key={product.id}>
            <CardUser product={product}/>
        </div>)
    })}
    </div>
  )
}

export default Category