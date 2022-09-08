import { Card } from "./Card";
import space from "../../../assets/space_tourism.PNG";
import pokemon from "../../../assets/JS_Course_Project.PNG";
import portfoliolab from "../../../assets/Portfolio_Lab.PNG";

export const Portfolio = () => {
  const vh = window.innerHeight;
  const jsCourseTitle = "Final project of the javaScript Developer course";
  const jsCourseDescription =
    "A website based on a Pokemon game with some interactions. The project aims at the purpose of showing the acquired skills during the course. The project was created with React.js and SASS.";

  const portfoliolabTitle = "Oddam w dobre ręce";
  const portfoliolabDescription = `The project "Oddam w dobre ręce" was prepared in order to expand my skills. It is a website with a simple form, which is to make it easier to donate unnecessary items to trusted institutions. This project uses React.js, SASS and Firebase.`;

  const spaceTitle = "Space tourism";
  const spaceDescription = `The project "Space Tourism" was made in order to expand my skills. It is a responsive multi-page website. The project was taken from www.frontendmentor.io. This project uses React.js and SASS.`;

  return (
    <section id="portfolio" className="portfolio" style={{ height: vh }}>
      <p className="portfolio_title">Portfolio</p>
      <div className="portfolio_container">
        <Card bgImg={pokemon} text={jsCourseTitle} description={jsCourseDescription} />
        <Card bgImg={portfoliolab} text={portfoliolabTitle} description={portfoliolabDescription} />
        <Card bgImg={space} text={spaceTitle} description={spaceDescription} />
      </div>
    </section>
  );
};
