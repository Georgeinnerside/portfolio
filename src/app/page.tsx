import Introduction from "./introduction/page";
import About from "./about/page";
import Projects from "./projects/page";
import Introanim from "./intro-anim/page";

export default function Home() {
  return (
    <section>
      <Introanim />
      <Introduction />
      <About />
      <Projects />
    </section>
  );
}
