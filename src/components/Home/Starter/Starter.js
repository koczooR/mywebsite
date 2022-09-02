import photo from "../../../assets/photo2_resized.png";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilMouseAlt } from "@iconscout/react-unicons";
import { Link as ScrollLink } from "react-scroll";

export const Starter = () => {
  const vh = window.innerHeight;

  return (
    <section id="starter" className="starter" style={{ height: vh }}>
      <div className="bubble"></div>
      <div className="bubble2"></div>
      <div className="bubble3"></div>
      <div className="bubble4"></div>
      <div className="starter_container">
        <div className="starter_container__image">
          <img src={photo} alt="Zdjęcie" />
        </div>
        <div className="starter_container__text">
          <p className="title">Hello, my name is</p>
          <h1>
            Piotr <span>Koczorowski</span>
          </h1>
          <p className="position">Junior Frontend Developer</p>
          <ScrollLink to="contact" smooth={true} duration={2000}>
            Contact
          </ScrollLink>
        </div>
        <div className="starter_container__icons">
          <a href="https://linkedin.com/in/piotr-koczorowski-koczor" target="_blank" rel="noreferrer noopener">
            <UilLinkedinAlt size="30" color="#fff" />
          </a>
          <a href="https://github.com/koczooR" target="_blank" rel="noreferrer noopener">
            <UilGithubAlt size="30" color="#fff" />
          </a>
        </div>
      </div>
      <ScrollLink to="parallax" smooth={true} className="scroll">
        <UilMouseAlt size="50" color="#990000" />
      </ScrollLink>
    </section>
  );
};
