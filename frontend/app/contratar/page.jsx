"use client";
import React, { useState } from "react";
import styles from "./contratar.module.css";
import PaseadorCard from "./PaseadorCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Loader } from "../components/loaders/genericloader.jsx"
import axios from "axios";
import { useEffect } from "react";

const { title, cardContainer, filterButton, filterAndCardsCtn } = styles;

export default function Contratar() {

  const [walkers, setWalkers] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(walkers)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URI}/api/user/walkers`)
      .then(response => {
        console.log(response.data)
        setWalkers(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    setLoading(false)

  }, [])
  console.log(walkers)

  if (loading) return <Loader />

  return (
    <div>
      <h1 className={title}>QUIERO CONTRATAR</h1>

      <div className={filterAndCardsCtn}>
        <div className={filterButton}>
          <Accordion square={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Ordenar por
            </AccordionSummary>
            <AccordionDetails>
              <p>Mayor precio</p>
              <p>Menor precio</p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={cardContainer}>
          {walkers.map((walker) => <PaseadorCard key={walker._id} walker={walker} />)}
        </div>
      </div>
    </div>
  );
}
