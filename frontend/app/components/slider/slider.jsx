"use client"
import Image from "next/image"
import { useState } from "react"

export const SliderHome = () => {
    const images = ["banner1.png", "banner2.png", "banner3.png"]
    const [indexSlider, setIndexSlider] = useState(0)
    const [imgToShow, setImgToShow] = useState(images[0])

    const prev = () => {
        if (indexSlider > 0) {
            setIndexSlider(indexSlider - 1) 
            setImgToShow(images[indexSlider - 1])
        }else{
            setIndexSlider(images.length - 1)
            setImgToShow(images[images.length - 1])
        }
    }

    const next = () => {
        if (indexSlider === images.length - 1) {
            setIndexSlider(0) 
            setImgToShow(images[0])
        }else{
            setIndexSlider(indexSlider + 1)
            setImgToShow(images[indexSlider + 1])
        }
    }
    return (
    <>

        <div className="relative overflow-hidden h-40 sm:h-44 md:h-56 lg:h-[400px]">
        <Image src={"/slider/"+imgToShow} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="demo slider de Felipe" width={1000} height={600}/>
        </div>

    </>
)}