import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import mask from "../assets/mask.jpg"
import sanitizer from "../assets/sanitizer.jpg"
import toiletPaper from "../assets/toiletPaper.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Toilet Paper (1 roll)', price: .60, image: toiletPaper},
        {id: 2, name: 'Face Mask', price: 2.5, image: sanitizer},
        {id: 3, name: 'Hand Sanitizer (1 litre)', price: 19.99, image: mask},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;