'use client'
import Head from "./cabecera";
import { Nunito } from "@next/font/google";
import "./globals.css";
import Header from "./components/navigation/Header.jsx";
import { Footer } from "./components/footer.jsx";
import { Provider } from 'react-redux';
import { wrapper } from "./components/store/store.js";

const nunito = Nunito();
//se deberia agregar un subset
export default function RootLayout({ children, ...rest }) {

  const { store } = wrapper.useWrappedStore(rest)

  return (
    <html lang="es" className={nunito.className}>
      <Head />
      <body className="bg-slate-600">
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
