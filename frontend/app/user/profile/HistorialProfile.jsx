import React from "react";
import styles from "./userProfile.module.css";

import HistorialCard from "../../components/historialCard/HistorialCard";

const {
  historialCardContainer
} = styles;

const HistorialProfile = () => {


  return (
    <div className={historialCardContainer}>
      <HistorialCard />
      <HistorialCard />
      <HistorialCard />
    </div>
  );
}

export default HistorialProfile