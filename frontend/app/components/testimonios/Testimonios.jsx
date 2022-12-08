"use client"
import React from "react";
import Card from "./Card";

const Testimonios = () => {
  let datosTesti = [
    {
      nombre  : "Felipe Espinoza",
      detalle : "Disfruté de un muy buen servicio por parte del paseador, siendo comprensible y amable con mis enanos, súper recomendado",
      nota    : 4.5,
      img     : "/profile1.jpg"
    },
    {
      nombre  : "Luca García",
      detalle : "Hemos repetido para dejar a nuestra pequeña en manos del mismo cuidador, la cuida como si fuera suya.",
      nota    : 5,
      img     : "/profile2.jpg"
    },
    {
      nombre  : "Josefina Berg",
      detalle : "Aquí cuidan siempre muy bien a mi Helga, todos son encantadores y cariñosos con los animalitos. Gracias 😊",
      nota    : 3,
      img     : "/profile3.jpg"
    },
  ]
  
  return (
    <div className="bg-secundario pt-20 pb-24 text-white">
      <h2 className="text-center text-3xl pt-3 pb-6 text-">NUESTROS CLIENTES NOS RECOMIENDAN</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <Card persona={datosTesti[0]} />
        <Card persona={datosTesti[1]} />
        <Card persona={datosTesti[2]} />
      </div>
    </div>
  );
};

export default Testimonios;
