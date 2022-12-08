"use client"
import React from "react";
import firstImg from "../../../public/firstImg.png"
import Image from "next/image";

export default function ClientWithButton() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center items-center py-12">
      <Image src={firstImg} className="rounded-lg mt-6 hidden md:grid"/>

      <div className="sm:max-w-lg max-w-sm">
        <h1 className="mb-4 text-xl font-bold text-center md:text-left text-gray-900 md:text-2xl lg:text-4xl">Cuidado y paseo de tus mascotas</h1>
        <p className="mb-6 text-lg font-normal text-justify text-gray-500">El paseo diario es una actividad fundamental para la calidad de vida de tus mascotas. Mantener una rutina diaria significa mejor comportamiento y mayor inteligencia. Los cuidadores registrados en nuestro sitio son vecinos y familias que cuidaran a tu mascota en su propia casa, como si fuera suyo</p>
        <div className="inline-flex py-3 px-5 font-medium text-principal bg-secundario rounded-lg hover:bg-opacity-90 focus:ring-4 focus:ring-blue-300">
            Quiero Contratar
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    </div>
  );
}
