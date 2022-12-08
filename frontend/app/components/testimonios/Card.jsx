"use client"
import React from "react";
import Image from "next/image";
import RatingStart from "./RatingStart";

export default function Card({persona}) {
  const {nombre, detalle, nota, img} = persona
  return (
    <div className="max-w-sm bg-principal rounded-lg shadow-sm hover:bg-[#f9df98] hover:shadow-xl transition-all">
    <Image src={img} alt="testimonios" className="mx-auto w-1/4 rounded-full mt-3" width={80} height={80}/>

    <div className="p-5">
      <p className="mb-3 font-normal text-gray-700 text-center">{detalle}</p>
      <h6 className="mb-2 text-xl italic tracking-tight text-gray-900 text-center">{nombre}</h6>
      <div className="text-center">
        <RatingStart nota={nota}/>
      </div>
    </div>
    </div>
  );
}
