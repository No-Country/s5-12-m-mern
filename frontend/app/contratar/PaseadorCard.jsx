"use client";

import React from "react";
import styles from "./paseadorCard.module.css";
import AvatarImg from "../../public/eze.jpg";
import RatingStart from "../components/testimonios/RatingStart";

const {
  paseadorCard,
  paseadorProfile,
  paseadorInfo,
  profileImage,
  paseadorName,
  presentacionPaseador,
  pPaseador,
  centerAndBold,
  contactarBtn,
  data
} = styles;

const PaseadorCard = ({ walker }) => {
  console.log(walker)
  return (
    <div className={paseadorCard}>
      <div className={paseadorProfile}>
        {walker?.img ? <img src={walker.img} className={profileImage} /> : <img src={AvatarImg} className={profileImage} />}
        <p>Paseador y cuidador</p>
        <RatingStart />
        <div className={data}>
          <p>Ubicacion</p>
          <p>{walker?.telephone}</p>
          <p>{walker?.mail}</p>
        </div>
      </div>
      <div className={paseadorInfo}>
        <h3 className={paseadorName}>{walker?.fullName}</h3>
        <h5 className={presentacionPaseador}>Presentación personal:</h5>
        <p className={pPaseador}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <p className={centerAndBold}>Paseos realizados:27</p>
        <p className={centerAndBold}>Precio/Hora:${walker?.fare}</p>
        <button className={contactarBtn}>Contactar</button>
      </div>
    </div>
  );
}

export default PaseadorCard
