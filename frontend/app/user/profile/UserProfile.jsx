import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "./userProfile.module.css";
/* import { Loader } from "../../components/loaders/genericloader"; */
import Image from "next/image";
import Avatar from "../../../public/avatar.png";



const {
    userProfile,
    imageProfileContainer,
    imageProfile,
    userInfo,
    contactData,
    userTitle,
    description,
    profileButton,
    buttonsControler,
    historial,
    misDatos,
    userProfileContainer
  } = styles;

export default function UserProfile() {
  const [user, setUser] = useState({});
  const userState = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    axios
      /* .get(`${process.env.NEXT_PUBLIC_API_URI}/api/user/${userState._id}`) */

      .get(
        `${process.env.NEXT_PUBLIC_API_URI}/api/user/637ce1ccaf88bd655fb0c9bd`
      )
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);

  return (
    <div className={userProfileContainer}>

      <div className={imageProfileContainer}>
        <Image src={Avatar} className={imageProfile} />
      </div>
      <div className={userInfo}>
        <h2 className={userTitle}>{user.fullName}</h2>
        <p className={description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <div className={contactData}>
          <p>Zona -- ? </p>
          <p>{user.telephone}</p>
          <p>{user.email}</p>
        </div>

        <button className={profileButton}>Editar perfil</button>
      </div>
      
    </div>
  );
}
