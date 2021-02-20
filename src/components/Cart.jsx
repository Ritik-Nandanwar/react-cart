import React, {useContext} from "react"
import axios from "axios"
import {cartContext} from "../Global/cartContext"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Cart = (props) => {
   
    const {dispatch, shoppingCart, totalPrice, qty} = useContext(cartContext);
         console.log("total qty: ",qty);
    return(
       <div className="cartContainer" title="cart">
       <div className="cartDetails">
           {shoppingCart.length ? shoppingCart.map(product => (
       <div className="cart" key={product.id}>
        <span className="cartProImage"><img src={product.image} alt={product.name}/>
           <span className="imageCount">{product.qty}</span>
        </span>
        <span className="cartProductName">{product.name}</span>
        <span className="cartProductPrice">${product.price}</span>
        <span className="inc" onClick={() => dispatch({type: 'INC', id:product.id})}><i className="fas fa-plus"></i></span>
        <span className="productQuantity">{product.qty}</span>
        <span className="dec" onClick={() => dispatch({type: 'DEC', id: product.id})}><i className="fas fa-minus"></i></span>
        
        
        <span className="productTotalPrice">
            ${
            ( product.qty * product.price).toFixed(2)
            }
        </span> 
        
        <button onClick={() => dispatch({type: 'DELETE_PRODUCT', id: product.id})} className="deleteCartPro"><i className="fas fa-trash-alt"></i></button>
           </div>  
        )) : 'Your Cart is currently empty!'}
        
        </div>
        {shoppingCart.length ? <div className="cartSummary">
            <div className="summary">
                <h3>Order Summary</h3>
                <div className="totalItems">
                    <div className="items">Total Items</div>
               <div className="itemsCount">{qty}</div>
                </div>
                <div className="totalPriceSection">
                 <div className="justTitle">Total Price</div>
                    <div className="itemsPrice">${totalPrice.toFixed(2)}</div>
                </div>
                <div className="stripSection">
                </div>
                </div></div>
        : ''}
      
       
       
</div>
    )
}

export default Cart;