"use client"

import React, {useState, useContext} from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import AuthContext from "../../store/auth-context";
import styles from "./page.module.css";
import axios from "axios"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  const emailHandler = (event) => {
    setEmail(event.target.value)
  };

    const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:8080/api/user/login", {email, password})
      console.log("soy response", data); 
      authCtx.login("123456", data)
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <Image
        src="/logowc.png"
        alt="logo Walk and Care"
        width="150"
        height="150"
      />
      <h1>Walk & Care</h1>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <input type="text" placeholder="Email" name="email" value={email} onChange={emailHandler}/>
        <input type="password" placeholder="Contraseña" name="password" value={password} onChange={passwordHandler}/>
        <button type="submit">Iniciar sesión</button>
      </form>
      <button>No tenes cuenta? Registrate</button>
    </div>
  );
};

export default Login;
