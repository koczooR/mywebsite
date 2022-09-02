import js from "../../../assets/javascript.png";
import sass from "../../../assets/sass.png";
import react from "../../../assets/react.png";
import html from "../../../assets/html.png";
import css from "../../../assets/css3.png";
import git from "../../../assets/git.png";

export const Skills = () => {
  const vh = window.innerHeight;

  return (
    <section id="skills" className="skills" style={{ height: vh }}>
      <p className="skills_title">Skills</p>
      <div className="skills_container">
        <img src={js} alt="js" className="js" />
        <img src={react} alt="react" className="react" />
        <img src={html} alt="html" className="html" />
        <img src={css} alt="css" className="css" />
        <img src={sass} alt="sass" className="sass" />
        <img src={git} alt="git" className="git" />
        <div className="scrum">Scrum</div>
      </div>
    </section>
  );
};
