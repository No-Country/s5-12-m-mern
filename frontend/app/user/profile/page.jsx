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

  // const [user, setUser] = useState({});
  const userState = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URI}/api/user/${userState.user.id}`)
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setLoading(false);
  // }, []);

  /* console.log('sera '+solapa) */

  const user = {
    dni: 7564565,
    email: "hardmeiercarlos@gmail.com",
    fullName: "Carlos Hardmeier",
    img: "https://walkncare-api.s3.sa-east-1.amazonaws.com/1669995004013-profile-pic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA23IGHSGJHIWWNBE4%2F20221207%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221207T134703Z&X-Amz-Expires=3600&X-Amz-Signature=3ca73b043c6736722a8b1dcb4f2b89c130e9bcf60119458b2838451f88c8fc40&X-Amz-SignedHeaders=host&x-id=GetObject",
    isOwner: true,
    pets: [],
    telephone: "65463185",
    zipCode: "123456",
    _id: "637ce1ccaf88bd655fb0c9bd"
  }

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
