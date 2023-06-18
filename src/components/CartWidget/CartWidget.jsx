import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="Widget">
        <ShoppingCartIcon />
        <p id="NumberWidget">3</p>
    </div>
  )
}

export default CartWidget