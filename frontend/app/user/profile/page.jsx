'use client'

import React , {useState} from "react";
import styles from "./userProfile.module.css";
import SolapasProfile from "./SolapasProfile";

const {
  titlePage,
  userProfile
} = styles;



const UserProfile = () => {

  
  /* console.log('sera '+solapa) */

  return (
    <div className={userProfile}>
      <h2 className={titlePage}>MI PERFIL</h2>
      <SolapasProfile/>
      
    </div>
  );
};

export default UserProfile;
