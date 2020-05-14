import React, { useContext } from "react"
import Image from "./Image"
import { Context } from "./Context"

const Photos = () => {
    const {allPhotos} = useContext(Context)
        
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className="big" />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos