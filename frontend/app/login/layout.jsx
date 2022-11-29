import Head from "next/head";
import { Nunito } from "@next/font/google";

const nunito = Nunito();
//se deberia agregar un subset
export default function LoginLayout({ children }) {
  return (
    <html lang="es" className={nunito.className}>
      <Head key="login">
        <title>Login Walkd and Care</title>
        <meta name="login" content="login walk and care" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
