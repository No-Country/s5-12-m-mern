import React from "react";
import styles from "./testimonios.module.css";
import Card from "./Card";


const {
    cardsContainer, 
    title
} = styles

const Testimonios = () => {

  
  return (
    <div>
      <h2 className={title}>Testimonios:</h2>

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
