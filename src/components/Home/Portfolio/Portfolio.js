import { Card } from "./Card";
import space from "../../../assets/space-tourism.webp";
import pokemon from "../../../assets/js-course-project.webp";
import portfoliolab from "../../../assets/portfolio-lab.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export const Portfolio = () => {
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

  const vh = window.innerHeight;

  return (
    <section id="portfolio" className="portfolio" style={{ height: vh }}>
      <p className="portfolio_title">Portfolio</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <Card img={item.img} title={item.title} text={item.text} url={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
