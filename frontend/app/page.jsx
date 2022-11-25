import Image from "next/image";
import { Footer } from "./components/footer";
import Header from "./components/navigation/Header";
import styles from "./page.module.css";
import Testimonios from "./components/testimonios/Testimonios";
import { SliderHome } from "./components/slider";
import PetForm  from "./components/registrationForms/PetForm";


export default function Home() {
  return (
    <>
      <Header />
      <SliderHome/>
      <PetForm/>
      <Testimonios/>
      <Footer />
    </>
  );
}
