import Image from "next/image";
import { Footer } from "./components/footer";
import Header from "./components/navigation/Header";
import styles from "./page.module.css";
import Testimonios from "./components/testimonios/Testimonios";
import { SliderHome } from "./components/slider";
import GetAll from './components/getAll'


export default function Home() {
  return (
    <>
      <Header />
      <SliderHome/>
      <GetAll/>
      <Testimonios/>
      <Footer />
    </>
  );
}
