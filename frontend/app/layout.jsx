import { AuthContextProvider } from "../store/auth-context";
import Head from "./cabecera";
import { Nunito } from "@next/font/google";
import "./globals.css";
import Header from "./components/navigation/Header.jsx";
import { Footer } from "./components/footer.jsx";

const nunito = Nunito();
//se deberia agregar un subset
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={nunito.className}>
      <Head />
      <AuthContextProvider>
        <body className="bg-slate-600">
          <Header />
          {children}
          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  );
}
