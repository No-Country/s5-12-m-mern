"use client";
import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import avatar from "../../../public/profile1.jpg";
import RatingStart from "./RatingStart";

const { card } = styles;

export default function Card() {
  return (
    <div className="max-w-sm bg-principal rounded-lg shadow-sm hover:bg-[#f9df98] hover:shadow-xl transition-all">
    <Image src={avatar} alt="testimonios" className="mx-auto w-1/4 rounded-full mt-3"/>

    <div className="p-5">
      <p className="mb-3 font-normal text-gray-700 text-center">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
      <h6 className="mb-2 text-xl italic tracking-tight text-gray-900 text-center">Pedrito Pérez</h6>
      <div className="text-center">
        <RatingStart />
      </div>
    </div>
    </div>
  );
}
