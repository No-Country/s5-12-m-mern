"use client"
import Image from "next/image"
import { useState } from "react"
export const SliderHome = () => {
    const images = ["slider1.jpg", "slider2.jpg", "slider3.jpg"]
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
    <div className="relative mt-3">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
            <div className="duration-700 ease-in-out">
                <Image src={"/slider/"+imgToShow} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="demo slider de Felipe" width={1000} height={600}/>
            </div>
        </div>
        <button onClick={prev} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none group-hover:mb-1 group-hover:scale-110 group-hover:shadow-lg transition-all">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button onClick={next} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none group-hover:mb-1 group-hover:scale-110 group-hover:shadow-lg transition-all">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
    </>
)}