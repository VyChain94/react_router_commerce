import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react'
import { Context } from '../Context'

export default function Products({item}) {
  const [isHovered, setHovered] = useState(false)
  // console.log(isHovered)
  const {removeFromCart} = useContext(Context)

  // is hovered? fulltrash, or else, empty trash 
  const trashIcon = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"


  return (
    <div className="cart-item">
        <i className={`${trashIcon}`} onClick={() => removeFromCart(item.id)}
          onMouseEnter ={() => setHovered(true)}
          onMouseLeave ={() => setHovered(false)}
        ></i>
        <img src={item.url} alt="Product Img" width="130px" />
        <p>$5.99</p>
    </div>
  )
}

Products.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}