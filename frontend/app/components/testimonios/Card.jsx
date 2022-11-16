import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import rating from "../../../public/rating.png";


const {ratingStars , card} = styles


export default function Card() {
  return (
    <div className={card}>
      <Image src={avatar}/>
      <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
      <Image src={rating} className={ratingStars}/>
    </div>
  );
}
