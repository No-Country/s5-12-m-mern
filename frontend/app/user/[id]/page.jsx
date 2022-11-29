'use client';

import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUserState } from "../../components/store/userSlice.js";

const UserProfile = ({ params }) => {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const userState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(userState)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URI}/api/user/${params.id}`)
      .then(response => {
        setUser(response.data)
        dispatch(login(response.data))
      })
      .catch(err => {
        console.log(err)
      })
    setLoading(false)

  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>UserProfile
      <p>ID: {params.id}</p>
      <p>Nombre {user.fullName}</p>
      <p>Email {user.email}</p>
      <p>Teléfono {user.telephone}</p>
      <p>DNI {user.dni}</p>
    </div>
  )
}

export default UserProfile