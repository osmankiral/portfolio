import AboutMe from "@/components/AboutMe";
import Fast from "@/components/Fast";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Service from "@/components/Service";


export default function Home() {
  return (
    <div className="mt-24">
      <Hero/>
      <Fast/>
      <AboutMe/>
      <Service/>
      <Projects/>
    </div>
  );
}
