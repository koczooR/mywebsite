import js from "../../../assets/javascript.webp";
import sass from "../../../assets/sass.webp";
import react from "../../../assets/react.webp";
import html from "../../../assets/html.webp";
import css from "../../../assets/css3.webp";
import git from "../../../assets/git.webp";
import angular from "../../../assets/angular.webp";
import wordpress from "../../../assets/wordpress.webp";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export const Skills = () => {
  const vh = window.innerHeight;

  return (
    <section id="skills" className="skills" style={{ height: vh }}>
      <p className="skills_title">Skills</p>
      <MouseParallaxContainer className="skills_container" resetOnLeave>
        <MouseParallaxChild factorX={0.05} factorY={0.05}>
          <img src={js} alt="js" className="js" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.07} factorY={0.07}>
          <img src={react} alt="react" className="react" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.05} factorY={0.05}>
          <img src={html} alt="html" className="html" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.03} factorY={0.03}>
          <img src={css} alt="css" className="css" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.1} factorY={0.1}>
          <img src={sass} alt="sass" className="sass" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.05} factorY={0.05}>
          <img src={git} alt="git" className="git" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.03} factorY={0.03}>
          <div className="scrum">Scrum</div>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.03} factorY={0.03}>
          <img src={angular} alt="angular" className="angular" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.05} factorY={0.05}>
          <img src={wordpress} alt="wordpress" className="wordpress" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </section>
  );
};
