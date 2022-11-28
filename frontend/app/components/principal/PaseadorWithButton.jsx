import React from "react";
import styles from "./principal.module.css";
import secondImg from "../../../public/cat.png";
import Image from "next/image";

const { rightContent, catImage, rigthTitle, styledButton, secondSection } =
  styles;

export default function PaseadorWithButton() {
  return (
    <div className={secondSection}>
      <Image src={secondImg} className={catImage} />
      <div className={rightContent}>
        <h4 className={rigthTitle}>¿Por qué ser cuidador o paseador?</h4>
        <p>Aceptamos cuidadores y paseadores con o sin experiencia.</p>
        <p>
          Los únicos requisitos son amor por los animales y brindar lo mejor de
          ti.
        </p>
        <p>
          Independencia, puedes controlar tus horarios y eliges que animales
          aceptas cuidar o pasear.
        </p>

        <button className={styledButton}>Quiero contratar</button>
      </div>
    </div>
  );
}
