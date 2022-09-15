import { Card } from "./Card";
import space from "../../../assets/space_tourism.PNG";
import pokemon from "../../../assets/JS_Course_Project.PNG";
import portfoliolab from "../../../assets/Portfolio_Lab.PNG";
import { UilAngleLeftB } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Portfolio = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const cards = [
    {
      id: 1,
      img: pokemon,
      title: "Final project of the javaScript Developer course",
      text: "A website based on a Pokemon game with some interactions. The project aims at the purpose of showing the acquired skills during the course. The project was created with React.js and SASS.",
      url: "https://earnest-starship-84e462.netlify.app",
    },
    {
      id: 2,
      img: portfoliolab,
      title: "Oddam w dobre ręce",
      text: `The project "Oddam w dobre ręce" was prepared in order to expand my skills. It is a website with a simple form, which is to make it easier to donate unnecessary items to trusted institutions. This project uses React.js, SASS and Firebase.`,
      url: "https://chipper-bublanina-9da9cd.netlify.app/",
    },
    {
      id: 3,
      img: space,
      title: "Space tourism",
      text: `The project "Space Tourism" was made in order to expand my skills. It is a responsive multi-page website. The project was taken from www.frontendmentor.io. This project uses React.js and SASS.`,
      url: "https://silver-bavarois-eb68ef.netlify.app",
    },
  ];

  const nextCard = () => {
    setCurrentCard((prevState) => prevState + 1);
    if (currentCard === cards.length) {
      setCurrentCard(1);
    }
  };

  const prevCard = () => {
    setCurrentCard((prevState) => prevState - 1);
    if (currentCard === 1) {
      setCurrentCard(cards.length);
    }
  };

  const vh = window.innerHeight;

  return (
    <section id="portfolio" className="portfolio" style={{ height: vh }}>
      <p className="portfolio_title">Portfolio</p>
      <div className="portfolio_container">
        <span className="arrow_left">
          <UilAngleLeftB color="#fff" size="50" onClick={prevCard} />
        </span>
        <span className="arrow_right">
          <UilAngleRightB color="#fff" size="50" onClick={nextCard} />
        </span>
        <TransitionGroup className="cards_container">
          {cards.map(
            (item) =>
              currentCard === item.id && (
                <CSSTransition key={item.id} timeout={1000} classNames="item">
                  <Card key={item.id} img={item.img} title={item.title} text={item.text} url={item.url} />
                </CSSTransition>
              )
          )}
        </TransitionGroup>
      </div>
    </section>
  );
};
