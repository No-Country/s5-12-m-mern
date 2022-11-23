"use client";
import React from "react";
import styles from "./principal.module.css";
import ClientWithButton from "./ClientWithButton";

const { principalSection } = styles;

export default function Principal() {
  return <div className={principalSection}>
    <ClientWithButton/>
  </div>;
}
