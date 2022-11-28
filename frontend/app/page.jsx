
import { Footer } from "./components/footer";
import Header from "./components/navigation/Header";
import Testimonios from "./components/testimonios/Testimonios";
import { SliderHome } from "./components/slider/slider";
import Principal from "./components/principal/Principal";



export default function Home() {

  return (
    <>
      <SliderHome />
      <Testimonios />
      <Principal />
    </>
  );
}
