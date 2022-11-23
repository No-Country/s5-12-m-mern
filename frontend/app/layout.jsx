import { AuthContextProvider } from "../store/auth-context";
import Head from "./cabecera";
import { Nunito } from "@next/font/google";
import "./globals.css";

const nunito = Nunito();
//se deberia agregar un subset
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={nunito.className}>
      <Head />
      <AuthContextProvider>
        <body className="bg-slate-600">{children}</body>
      </AuthContextProvider>
    </html>
  );
}
