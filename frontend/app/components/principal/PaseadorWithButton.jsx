"use client"
import React from "react";
import secondImg from "../../../public/cat.png";
import Image from "next/image";

export default function PaseadorWithButton() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center items-center pb-12">
      <div className="sm:max-w-lg max-w-sm">
        <h1 className="mb-4 text-xl font-bold text-center md:text-right text-gray-900 md:text-2xl lg:text-4xl">¿Por qué ser cuidador o paseador?</h1>
        <p className="mb-6 text-lg font-normal text-justify text-gray-500">Aceptamos cuidadores y paseadores con o sin experiencia. Los únicos requisitos son amor por los animales y brindar lo mejor de ti. Independencia, puedes controlar tus horarios y eliges que animales aceptas cuidar o pasear.</p>
        <div className="inline-flex md:float-right py-3 px-5 font-medium text-principal bg-secundario rounded-lg hover:bg-opacity-90 focus:ring-4 focus:ring-blue-300">
        Quiero pasear/cuidar mascotas
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    <Image src={secondImg} className="rounded-lg mt-6"/>
    </div>
  );
}
