import React from "react";
import styles from "./contratar.module.css";
import PaseadorCard from "./PaseadorCard";

const { title, cardContainer } = styles;

export default function Contratar() {
  return (
    <div>
      <h1 className={title}>QUIERO CONTRATAR</h1>
      <div className={cardContainer}>
        <PaseadorCard />
        <PaseadorCard />
      </div>
    </div>
  );
}
