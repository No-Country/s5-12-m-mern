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
    <div className={testimoniosCtn}>
      <h2 className={title}>NUESTROS CLIENTES NOS RECOMIENDAN</h2>

      <div className={cardsContainer}>
        <Card/>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Testimonios;
