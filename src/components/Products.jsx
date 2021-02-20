import React, {useContext} from "react"
import { productContext } from "../Global/productContext"
import {cartContext} from "../Global/cartContext"

const Products = (props) => {
   const {products} = useContext(productContext);
  //  const {dispatch} = useContext(cartContext);
   const {dispatch, shoppingCart, totalPrice, qty} = useContext(cartContext);
    return(
        <div title="products">
        <div className="products" >
          {products.map(product => (
              <div className="product"  key={product.id}>
                <div className="pro">
                <div className="productImage">
                  <img src={product.image} alt="Not found"/>
                </div>
                <div className="productDetails">
                    <div className="proName">
                    <h4>{product.name}</h4>
                    </div>
                  <div className="proPrice">
                      €{product.price.toFixed(2)}
                  </div>
                </div>
                <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                    <button className="buyNow" onClick={() => dispatch({type: 'INC', id:product.id})}>add to cart </button>
                    {/* <button className="buyNow" onClick={() => dispatch({type: 'INC', id:product.id})}>add to cart {product.qty}</button> */}
                  </div>
                  </div>
              </div>
          ))}
        
        </div>
      
        </div>
    )

}

export default Products;