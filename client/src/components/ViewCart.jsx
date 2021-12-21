import React from "react";
import Productcard from "./Productcard";
function ViewCart(props) {


  return <div>
      { props.cart.map((product) => <Productcard pid={product._id} mrp={product.mrp} totalQuantity={product.totalQuantity} discountedPrice={product.discountedPrice} name={product.name} product={product} cart={props.cart} setCart={props.setCart}/>)
      }
  </div>
}
export default ViewCart;
