'use client'

import React, { useEffect, useState } from "react";
import styles from "./userProfile.module.css";
import SolapasProfile from "./SolapasProfile";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loaders/genericloader.jsx";
import axios from "axios";
import PetsContainer from "./PetsContainer.jsx";

const {
  titlePage,
  userProfile,
  userAndPetsContainer
} = styles;

const UserProfile = () => {

  const [user, setUser] = useState({});
  const userState = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URI}/api/user/${userState.user.id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);

  if (loading) return <Loader />

  return (
    <div className={userProfile}>
      <h2 className={titlePage}>MI PERFIL</h2>
      <div className={userAndPetsContainer}>
        <SolapasProfile user={user} />
        <PetsContainer pets={user.pets} />

      </div>

    </div>
  );
};

export default UserProfile;
