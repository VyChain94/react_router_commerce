import PropTypes from 'prop-types';
import React, {useContext, useState} from "react" 
import {Context} from "../Context"
import Products from '../components/Products';

export default function Cart() {
    const [isOrderButton, setOrderButton] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    // console.log(cartItems)
    const priceCalc = 5.99 * cartItems.length
    const priceDisplay = priceCalc.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const productElement = cartItems.map(item => (
        <Products key={item.id} item={item}/>
    ))

    function orderButton() {
        setOrderButton("Ordering...")
        setTimeout(() => {
            console.log("Order placed");
            setOrderButton("Place Order")
            emptyCart()
          }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {productElement}
            <p className="total-cost">Total: {priceDisplay}</p>

            <div className="order-button">
                <button disabled={cartItems.length > 0 ? false : true} onClick={orderButton}>{isOrderButton}</button>
            </div>
        </main>
    )
}

Cart.protoTypes = {
    cartItems: PropTypes.array
  }
