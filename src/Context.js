import PropTypes from 'prop-types';

import React, {useState, useEffect} from 'react'

const Context = React.createContext("")

// passing props for generic children object below
function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCart] = useState([])

    const url = 
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
        //parse as json
        .then(res => res.json())
        // using data, we want to reassign state and pass in data
        .then(data => setAllPhotos(data))
      }, []);
    //   console.log(allPhotos)

    // map our photos to return opposite property of isFavorite if our id's match
    function toggleFavorite(id) {
      const updatedArr = allPhotos.map(photo => {
          if(photo.id === id) {
              console.log(id)
              // console.log(!photo.isFavorite)
              return {...photo, isFavorite: !photo.isFavorite}
          }
          return photo
      })
      setAllPhotos(updatedArr)
  }

//   when we call this function we will pass in newItem
//  update cart items, and return prev items plus our new Item.
function addToCart(newItem) {
    setCart(prevItems => [...prevItems, newItem])
}
// console.log(addToCart)

// id parameter because thats what we we will refer to in this function
function removeFromCart(id) {
      //then create a new array filled with items whose id's aren't equal in value or type
  setCart(prevItems => prevItems.filter(item => item.id !== id))
}

function emptyCart() {
  setCart([])
}

  return (
    // export values
      <Context.Provider value ={{allPhotos, toggleFavorite, cartItems, addToCart, 
        removeFromCart, emptyCart}}toggle={()=> toggleFavorite()}>
         {props.children}
      </Context.Provider>
  )
}

export {ContextProvider, Context}

ContextProvider.protoTypes = {
  cartItems: PropTypes.array
}




















