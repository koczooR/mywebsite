import { UilArrowUp } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export const ScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const showButton = () => {
    if (window.scrollY >= window.innerHeight / 2) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("scroll", showButton);
  });

  return (
    <ScrollLink className={scrollToTop ? "box active_button" : "box"} to="starter" smooth={true} duration={2000}>
      <UilArrowUp size="40" color="#1e1e1e" />
    </ScrollLink>
  );
};
