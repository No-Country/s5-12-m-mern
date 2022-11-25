import Image from "next/image";
import { Footer } from "./components/footer";
import Header from "./components/navigation/Header";
import styles from "./page.module.css";
import Testimonios from "./components/testimonios/Testimonios";
import { SliderHome } from "./components/slider";
import Principal from "./components/principal/Principal";


export default function Home() {
  return (
    <>
      <Header />
      <SliderHome/>
      <Principal/>
      <Testimonios/>
      <Footer />
      {/* momentaneo */}
      
    </>
  );
}
