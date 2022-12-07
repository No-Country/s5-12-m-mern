import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "./userProfile.module.css";

import HistorialCard from "../../components/historialCard/HistorialCard";

const {
  historialCardContainer
} = styles;

export default function HistorialProfile() {
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
    <div className={historialCardContainer}>
      <HistorialCard />
      <HistorialCard />
      <HistorialCard />
    </div>
  );
}
