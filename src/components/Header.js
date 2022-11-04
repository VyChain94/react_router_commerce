import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

export default function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
           <Link to="/"><h2>REI CO-OP X OUTDOOR AFRO</h2></Link>
           <Link to="/cart">
            <i className={`${cartClassName} ri-fw ri-2x`}></i>
           </Link>
        </header>
    )
}
