import React from "react";
import { useState, useEffect } from "react";
import styles from "./userProfile.module.css";
import UserProfile from "./UserProfile";
import HistorialProfile from './HistorialProfile';

const {
  buttonsControler,
  historial,
  misDatos,
} = styles;


const UserAndProfileContainer = ({ user }) => {

  const { requests, ...userInfo } = user
  const [solapa, setSolapa] = useState(true);

  function goToHistorial() {
    setSolapa(false)
  }
  function goToUserProfile() {
    setSolapa(true)
  }

  return (
    <div>
      <div className={buttonsControler}>

        <button className={misDatos} onClick={goToUserProfile}>Mis datos</button>
        <button className={historial} onClick={goToHistorial}>Historial</button>
      </div>

      {solapa ? <UserProfile user={userInfo} /> : <HistorialProfile requests={requests} />}
    </div>
  );
}

export default UserAndProfileContainer;
