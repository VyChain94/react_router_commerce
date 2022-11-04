// import what we need
import React, {useContext} from "react"
import Image from "../components/Image"
import {Context} from "../Context"
import getClass from "../utils/utils"

export default function Photos() {
    // 
    const {allPhotos} = useContext(Context)
    // console.log(allPhotos)
    //map over our images to create instances of img and i(index)
    const images = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    return (
        <main className="photos">
            {images}
        </main>
    )
}