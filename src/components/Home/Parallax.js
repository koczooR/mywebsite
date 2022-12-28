import { useEffect, useState } from "react";
import background from "../../assets/parallax/background.webp";
import starship from "../../assets/spaceship.webp";
import stones from "../../assets/parallax/stones.webp";
import stars from "../../assets/parallax/stars.webp";
import planet6 from "../../assets/parallax/planet6.webp";
import planet5 from "../../assets/parallax/planet5.webp";
import planet4 from "../../assets/parallax/planet4.webp";
import planet3 from "../../assets/parallax/planet3.webp";
import planet2 from "../../assets/parallax/planet2.webp";
import planet1 from "../../assets/parallax/planet1.webp";
import { About } from "./About/About";
import { Skills } from "./Skills/Skills";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact/Contact";

export const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [position, setPosition] = useState(null);

  const vh = window.innerHeight;

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setOffsetY(window.scrollY - window.innerHeight);
      setPosition("fixed");
    } else {
      setPosition("absolute");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="parallax" className="parallax" style={{ height: vh }}>
        <img src={background} alt="background" style={{ position: position }} />
        <img src={stars} alt="stars" style={{ position: position, opacity: 0.3 }} />
        <img src={planet4} alt="planet4" style={{ transform: `translateX(${offsetY * 0.2}px)`, position: position }} />
        <img src={planet5} alt="planet5" style={{ transform: `translateX(${offsetY * 0.4}px)`, position: position }} />
        <img src={planet6} alt="planet6" style={{ transform: `translateX(${offsetY * 0.1}px)`, position: position }} />
        <img src={planet1} alt="planet1" style={{ transform: `translateX(${offsetY * -0.2}px)`, position: position }} />
        <img src={planet2} alt="planet2" className="planet2" style={{ transform: `translateX(${offsetY * -0.4}px)`, position: position }} />
        <img src={planet3} alt="planet3" style={{ transform: `translateX(${offsetY * -0.1}px)`, position: position }} />
        <img src={stones} alt="stones" style={{ transform: `scale(${offsetY * 0.001})`, position: position }} />
        <img
          src={starship}
          alt="starship"
          className="starship"
          style={{ transform: `translate(${offsetY * 0.65}px, ${offsetY * 0.15}px) scale(${offsetY * 0.001})`, position: position }}
        />
      </section>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
