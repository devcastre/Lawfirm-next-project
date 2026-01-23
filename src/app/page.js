
import { Aboutsection } from "./Components/LandingPageComponents/Aboutsection";
import { Hero } from "./Components/LandingPageComponents/Hero";
import { Servicesection } from "./Components/LandingPageComponents/Servicesection";
import { Teamsection } from "./Components/LandingPageComponents/Teamsection";


export default function Home() {
  return (
    <main className="d-flex flex-column align-items-center m-2 m-md-4 gap-5 gap-md-6 gap-lg-7">
      <Hero/>
      <Aboutsection/>
      <Servicesection/>
      <Teamsection/>
    </main>
  );
}