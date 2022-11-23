
import { Footer } from "./components/footer";
import Header from "./components/navigation/Header";
import Testimonios from "./components/testimonios/Testimonios";
import { SliderHome } from "./components/slider";



export default function Home() {

  return (
    <>
      <Header />
      <SliderHome/>
      <Testimonios/>
      <Footer />
    </>
  );
}
