import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "./historialCard.module.css";
import Avatar from "../../../public/avatar.png";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "@mui/material/Icon";
import RatingStepsWhite from "../testimonios/ratingStepsWhite/RatingStepsWhite";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const {
  historialCard,
  superiorCard,
  opinionCard,
  ratingAndButton,
  tArea,
  pOpinion,
  calificar,
  enviarButton,
  superiorText,
  deleteIcon,
} = styles;

export default function HistorialCard() {
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
    <div className={historialCard}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={superiorCard}>
            <Image src={Avatar} />
            <div className={superiorText}>
              <h5>TU MASCOTA REALIZÓ UN PASEO CON HORACIO!</h5>
              <p>HACE 6 DÍAS</p>
            </div>
            <div className={deleteIcon}>
              <DeleteIcon />
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={opinionCard}>            
            <textarea
              placeholder="Deja tu opinión del paseador aquí.."
              className={tArea}
            ></textarea>
          </div>
          <div className={ratingAndButton}>
            <div className={calificar}>
              <p>Calificar</p>
              <RatingStepsWhite />
            </div>
            <button className={enviarButton}>Enviar</button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
