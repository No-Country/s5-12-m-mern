import React from "react";
import styles from "./userProfile.module.css";
import Image from "next/image";

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

const UserProfile = ({ user }) => {

  console.log(user)

  return (
    <div className={userProfileContainer}>

      <div className={imageProfileContainer}>
        <Image src={user.img} width={200} height={200} className={imageProfile} />
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
          <p>{user.zipCode}</p>
          <p>{user.telephone}</p>
          <p>{user.email}</p>
        </div>

        <button className={profileButton}>Editar perfil</button>
      </div>

    </div>
  );
}

export default UserProfile