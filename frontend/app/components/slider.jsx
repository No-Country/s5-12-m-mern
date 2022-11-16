"use client"
import Image from "next/image"
import { useState } from "react"
export const SliderHome = () => {
    const images = ["carousel-1.svg", "carousel-2.svg", "carousel-3.svg"]
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
    <div id="indicators-carousel" className="relative" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="duration-700 ease-in-out">
                <Image src={"/slider/"+imgToShow} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="demo slider de Felipe" width={100} height={100}/>
            </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false"></button>
        </div>
        <button onClick={prev} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button onClick={next} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
    </>
)}