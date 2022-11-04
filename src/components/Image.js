import PropTypes from 'prop-types';
import React, {useState, useContext} from "react";
import {Context} from "../Context"

// recieveing this deconstructed prop from photos component.
export default function Image({className, img}) {
    const [isHovered, setHovered] = useState(false)
    //bring in context
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    // console.log(isHovered)

    function heartIcon() {
        if(img.isFavorite) {
           return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)} ></i>
        } else if (isHovered) {
           return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)} ></i>
        }
    }
    
//add these comments and steps to challenge #12 :)
    function cartIcon() {
        //if atleast any item in the arrays id is equal to the images id
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        }
        else if (isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div className={`${className} image-container`}
        onMouseEnter ={() => setHovered(true)}
        onMouseLeave ={() => setHovered(false)}
        >
            <img src={img.url} alt="mad images" className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.protoTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}