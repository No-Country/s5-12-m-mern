"use client";
import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import RatingStart from "./RatingStart";

const { card, outOfCardImage, cardTitle, cardContent } = styles;

export default function Card() {
  

  return (
    <div className={card}>
      <Image src={avatar} className={outOfCardImage} />

      <h4 className={cardTitle}>Ezequiel</h4>

      <p className={cardContent}>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..."
      </p>

      <RatingStart/>

      

      
    </div>
  );
}
