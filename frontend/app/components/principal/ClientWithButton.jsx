import React from "react";
import styles from "./principal.module.css";
import firstImg from "../../../public/firstImg.png"
import Image from "next/image";


const {rightContent,image, rigthTitle,styledButton,firstSection} = styles;

export default function ClientWithButton() {
  return (
    <div className={firstSection}>
      <Image src={firstImg} className={image}/>
      <div className={rightContent}>
        <h4 className={rigthTitle}>Cuidado y paseo de tus mascotas</h4>
        <p>
          El paseo diario es una actividad fundamental para la calidad de vida
          de tus mascotas.
        </p>
        <p>
          Mantener una rutina diaria significa mejor comportamiento y mayor
          inteligencia.
        </p>
        <p>
          Los cuidadores registrados en nuestro sitio son vecinos y familias que
          cuidaran a tu mascota en su propia casa, como si fuera suyo
        </p>

        <button className={styledButton}>Quiero contratar</button>
      </div>
    </div>
  );
}
