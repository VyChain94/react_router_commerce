import React from "react"
import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import {Routes, Route} from "react-router-dom"

export default function App() {    
    return (
        <div>
            <Header />
            
            <Routes>
                <Route exact path="/" 
                element={<Photos />}>
                </Route>
                
                <Route path="/cart" 
                element={<Cart />}>
                </Route>
            </Routes>
            {/* <h1>Home Page</h1> */}
        </div>
    )
}
