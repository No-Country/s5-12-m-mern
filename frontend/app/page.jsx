import Testimonios from "./components/testimonios/Testimonios";
import { SliderHome } from "./components/slider/slider";
import Principal from "./components/principal/Principal";
import { Suspense } from "react";
import {Loader} from "./components/loaders/genericloader"


export default function Home() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
      <SliderHome />
      </Suspense>

      <Testimonios />
      <Principal />
    </>
  );
}
