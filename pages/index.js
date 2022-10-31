
import { Fragment } from "react";
import Hero from "../components/UI/Hero";

import Employer from "../components/UI/Employer";
import Experience from "../components/UI/Experience";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";


export default function Home() {
  return (
  <Fragment>
    <Hero/>
    <Experience/>
    <Employer/>
    <Portfolio/>
    <Contact/>
   
  </Fragment>
  );
}
 