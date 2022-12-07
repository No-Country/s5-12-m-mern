import React from "react";
import styles from "./testimonios.module.css";
import Card from "./Card";


const {
    cardsContainer, 
    title,
    testimoniosCtn
} = styles

const Testimonios = () => {

  
  return (
    <div className="bg-secundario pt-6 pb-12">
      <h2 className="text-center text-3xl pt-3 pb-6 text-principal">NUESTROS CLIENTES NOS RECOMIENDAN</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Testimonios;
