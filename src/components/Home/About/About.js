import cv from "../../../assets/CV_Piotr_Koczorowski.pdf";
import { UilImport } from "@iconscout/react-unicons";

export const About = () => {
  const vh = window.innerHeight;

  return (
    <section id="about" className="about" style={{ height: vh }}>
      <p className="about_title">About me</p>
      <div className="about_container">
        <p className="about_greeting">
          Hi, I’m <span>Piotr</span>. Nice to <span>meet</span> you.
        </p>
        <p className="about_text">I’m Junior Frontend Developer. I like to code things from scratch and enjoy bringing ideas to life in the browser.</p>
        <a href={cv} download>
          Download CV <UilImport size="18" />
        </a>
      </div>
    </section>
  );
};
