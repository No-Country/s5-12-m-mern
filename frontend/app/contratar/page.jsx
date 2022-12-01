"use client";
import React from "react";
import styles from "./contratar.module.css";
import PaseadorCard from "./PaseadorCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const { title, cardContainer, filterButton,filterAndCardsCtn } = styles;

export default function Contratar() {
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
          <PaseadorCard />
          <PaseadorCard />
        </div>
      </div>
    </div>
  );
}
